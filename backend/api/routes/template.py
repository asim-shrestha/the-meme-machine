import uuid
from pydantic import BaseModel
from datetime import datetime

from api import firestore
from api.routes.utils import get_full_url, firebase_insert
from fastapi import APIRouter, File, Form

router = APIRouter()

FOLDER = '/templates'


class Template(BaseModel):
    name: str
    url: str
    timestamp: datetime
    uuid: str


@router.post('', response_model=Template)
@firebase_insert('templates')
async def create_template(file: bytes = File(...), name: str = Form(...)):
    id_ = str(uuid.uuid4())
    firestore.child(f'{FOLDER}/{id_}').put(file)

    return Template(
        name=name,
        url=get_full_url(FOLDER, id_),
        uuid=id_,
        timestamp=datetime.utcnow()
    )
