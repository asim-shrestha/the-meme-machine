from sqlalchemy import *
from sqlalchemy.orm import relationship
from api import config

from ._base import Base


class User(Base):
    name = Column(String)