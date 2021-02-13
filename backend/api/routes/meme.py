import uuid
from typing import List

from api import session, models, schemas, firestore
from api.routes.utils import get_full_url
from fastapi import Depends, APIRouter, File, Form

router = APIRouter()

FOLDER = '/memes'


@router.post('', response_model=schemas.Meme)
def create_meme(meme: schemas.MemeCreate, user_id: str = None,  db: session = Depends(session)):
    id_ = str(uuid.uuid4())
    # firestore.child(f'{FOLDER}/{id_}').put(file)

    meme = models.Meme(**meme.to_dict(), url=get_full_url(folder, id_))
    meme.save(db)

    return meme


@router.get('', response_model=List[schemas.Meme])
def get_all_memes(db: session = Depends(session)):
    return models.Meme.query(db).all()


@router.get('/{meme_id}', response_model=schemas.MemeFull)
def get_meme(meme_id: int, db: session = Depends(session)):
    return models.Meme.query(db).get(meme_id)


