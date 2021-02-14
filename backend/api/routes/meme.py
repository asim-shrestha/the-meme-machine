import uuid
from datetime import datetime

from api import firestore, config, db
from api.meme_maker.make_meme import make_meme, fry_image
from api.routes.utils import get_full_url, firebase_insert
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

FOLDER = '/memes'
FEED = f'feed{FOLDER}'


class MemeCreate(BaseModel):
    template: str
    topText: str
    bottomText: str
    isDeepFried: bool = False


class Meme(MemeCreate):
    url: str
    timestamp: datetime


@router.post('', response_model=Meme)
@firebase_insert('memes')
async def create_meme(meme: MemeCreate):
    id_ = str(uuid.uuid4())

    template = db.child('templates').child(meme.template).get().val()
    file_path = config.TMP_FOLDER / template['uuid']

    firestore.child(f"templates/{template['uuid']}").download(path=str(config.TMP_FOLDER), filename=str(file_path))
    buf = file_path

    buf = make_meme(buf, meme.topText, meme.bottomText)
    if meme.isDeepFried:
        buf = await fry_image(buf)

    firestore.child(f'{FOLDER}/{id_}').put(buf.getvalue())

    return Meme(**meme.dict(), url=get_full_url(FOLDER, id_), timestamp=datetime.utcnow())




