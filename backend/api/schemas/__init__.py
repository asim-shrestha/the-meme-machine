from pydantic import BaseModel


class BaseORMModel(BaseModel):
    id: int

    class Config:
        orm_mode = True


class User(BaseORMModel):
    name: str


class UserCreate(BaseModel):
    pass
