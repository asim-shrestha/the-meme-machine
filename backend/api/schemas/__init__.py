from pydantic import BaseModel


class BaseORMModel(BaseModel):
    id: int

    class Config:
        orm_mode = True


class User(BaseORMModel):
    name: str


class UserCreate(BaseModel):
    pass


class Template(BaseORMModel):
    name: str
    url: str


class MemeCreate(BaseModel):
    template_id: int
    top_text: str
    bottom_text: str
    is_deep_fried: bool = False


class Meme(MemeCreate, BaseORMModel):
    url: str


class MemeFull(MemeCreate, BaseORMModel):
    url: str
