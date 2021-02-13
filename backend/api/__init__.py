from fastapi import FastAPI

from .config import BaseConfig
config = BaseConfig()

from .database import session, engine
from . import models

models.Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="The Meme Machine API",
    description="Team: Legacy Edition",
    docs_url='/'
)

from . import routes, services, schemas
