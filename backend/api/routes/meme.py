import uuid
from typing import List

from api import session, models, schemas, firestore
from api.routes.utils import get_full_url
from fastapi import Depends, APIRouter, File, Form

router = APIRouter()

FOLDER = '/memes'


@router.post('', response_model=schemas.Meme)
def create_meme(meme: schemas.MemeCreate, db: session = Depends(session)):
    id_ = str(uuid.uuid4())
    # firestore.child(f'{FOLDER}/{id_}').put(file)

    meme = models.Meme(**meme.dict(), url=get_full_url(FOLDER, id_))
    meme.save(db)

    return meme


@router.get('', response_model=List[schemas.Meme])
def get_all_memes(db: session = Depends(session)):
    return models.Meme.query(db).all()


@router.get('/{meme_id}', response_model=schemas.MemeFull)
def get_meme(meme_id: int, db: session = Depends(session)):
    meme = models.Meme.query(db).get(meme_id)
    print(meme.comments)
    print(meme.comments[0].text)
    return meme


@router.post('/{meme_id}/comment', response_model=schemas.MemeFull)
def comment_on_a_meme(comment: schemas.MemeCommentCreate, meme_id: int, db: session = Depends(session)):
    comment = models.MemeComment(
        **comment.dict(), meme_id=meme_id
    )

    comment.save(db)

    return models.Meme.query(db).get(meme_id)


@router.post('/{meme_id}/like', response_model=schemas.MemeFull)
def like_a_meme(like: schemas.MemeLikeCreate, meme_id: int, db: session = Depends(session)):
    like = models.MemeLike(
        **like.dict(), meme_id=meme_id
    )

    like.save(db)

    return models.Meme.query(db).get(meme_id)



