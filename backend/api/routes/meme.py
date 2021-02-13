import uuid
from typing import List
from io import BytesIO

from api import session, models, schemas, firestore, config
from api.routes.utils import get_full_url
from api.meme_maker.make_meme import make_meme, fry_image
from fastapi import Depends, APIRouter, File, Form

router = APIRouter()

FOLDER = '/memes'


@router.post('', response_model=schemas.Meme)
async def create_meme(meme: schemas.MemeCreate, db: session = Depends(session)):
    id_ = str(uuid.uuid4())
    template = models.Template.query(db).get(meme.template_id)
    file_path = config.TMP_FOLDER / template.uuid

    firestore.child(f"templates/{template.uuid}").download(path=str(config.TMP_FOLDER), filename=str(file_path))
    buf = file_path

    buf = make_meme(buf, meme.top_text, meme.bottom_text)

    if meme.is_deep_fried:
        buf = await fry_image(buf)

    firestore.child(f'{FOLDER}/{id_}').put(buf.getvalue())

    meme = models.Meme(**meme.dict(), url=get_full_url(FOLDER, id_), uuid=id_)
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




