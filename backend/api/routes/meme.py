import json
import uuid
from datetime import datetime

from api.meme_maker.make_meme import make_meme, fry_image
from api.routes.utils import get_full_url, firebase_insert
from fastapi import APIRouter
from pydantic import BaseModel

from api import firestore, config, db

router = APIRouter()

FOLDER = '/memes'
FEED = f'feed{FOLDER}'


class MemeCreate(BaseModel):
    template: str
    topText: str
    bottomText: str
    isDeepFried: bool = False
    comments: int = 0


class Meme(MemeCreate):
    url: str
    timestamp: datetime


async def generate_meme(meme) -> str:
    id_ = str(uuid.uuid4())
    template = db.child('templates').child(meme.template).get().val()
    file_path = config.TMP_FOLDER / template['uuid']

    firestore.child(f"templates/{template['uuid']}").download(path=str(config.TMP_FOLDER), filename=str(file_path))
    buf = file_path

    buf = make_meme(buf, meme.topText, meme.bottomText)
    if meme.isDeepFried:
        buf = await fry_image(buf)

    firestore.child(f'{FOLDER}/{id_}').put(buf.getvalue())

    return id_


@router.post('', response_model=Meme)
@firebase_insert('memes')
async def create_meme(meme: MemeCreate):
    id_ = await generate_meme(meme)

    return Meme(**meme.dict(), url=get_full_url(FOLDER, id_), timestamp=datetime.utcnow())


@router.post('/{meme_id}', response_model=Meme)
async def create_meme_comment(meme_id: str, comment: MemeCreate, target: str = 'memes'):
    assert target in ['memes', 'comments']
    id_ = await generate_meme(comment)

    meme = db.child(target).child(meme_id).get().val()
    db.child(target).child(meme_id).update({'comments': meme.get('comments', 0) + 1})

    comment = Meme(**comment.dict(), url=get_full_url(FOLDER, id_), timestamp=datetime.utcnow())
    meme_json = json.loads(comment.json())

    db.child('comments').child(meme_id).push(meme_json)

    return meme_json


