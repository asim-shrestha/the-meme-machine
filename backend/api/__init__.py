from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import pyrebase

from .config import BaseConfig
config = BaseConfig()

from .database import session, engine
from . import models, schemas

models.Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="The Meme Machine API",
    description="Team: Legacy Edition",
    docs_url='/'
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



firebase = pyrebase.initialize_app({
  "apiKey": "AIzaSyDMvzS-zLhvTyEDO-CtB_nWlU_j7AX_23E",
  "databaseURL": '',
  "authDomain": "legacy-meme.firebaseapp.com",
  "storageBucket": "legacy-meme.appspot.com"
})

firestore = firebase.storage()

from . import routes


