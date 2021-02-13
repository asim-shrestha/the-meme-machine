from sqlalchemy import *
from sqlalchemy.orm import relationship
from api import config

from ._base import Base


class User(Base):
    name = Column(String)


class Template(Base):
    name = Column(String)
    url = Column(String)

    memes = relationship('Meme', backref='template')


class Meme(Base):
    template_id = Column(ForeignKey("template.id"))
    top_text = Column(String)
    bottom_text = Column(String)
    is_deep_fried = Column(Boolean)
    url = Column(String)

    comments = relationship('MemeComment', backref='meme')


class MemeComment(Base):
    meme_id = Column(ForeignKey("meme.id"))
    text = Column(String)
