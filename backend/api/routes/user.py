from fastapi import Depends, APIRouter

from api import session, models, schemas

router = APIRouter()


@router.post('', response_model=schemas.User)
def generate_user(db: session = Depends(session)):
    db_user = models.User(name='todo')
    db_user.save(db)

    return db_user
