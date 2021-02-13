import uuid
from typing import List

from api import session, models, schemas, firestore
from api.routes.utils import get_full_url
from fastapi import Depends, APIRouter, File, Form

router = APIRouter()

FOLDER = '/templates'


@router.post('', response_model=schemas.Template)
def create_template(file: bytes = File(...), name: str = Form(...), db: session = Depends(session)):
    id_ = str(uuid.uuid4())
    firestore.child(f'{FOLDER}/{id_}').put(file)

    template = models.Template(
        name=name,
        url=get_full_url(FOLDER, id_),
        uuid=id_
    )

    template.save(db)

    return template


@router.get('', response_model=List[schemas.Template])
def get_all_templates(db: session = Depends(session)):
    return models.Template.query(db).all()

