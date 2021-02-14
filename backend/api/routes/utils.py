import json

from api import db

from functools import wraps

from api import config


def get_full_url(folder, id_, alt: str = '?alt=media'):
    return f'{config.FIRESTORE_URL}{folder}%2F{id_}{alt}'


def firebase_insert(collection: str):
    def decorator(func):

        @wraps(func)
        async def wrapper(*args, **kwargs):
            ret = await func(*args, **kwargs)
            if ret:
                db.child(collection).push(json.loads(ret.json()))
            return ret
        return wrapper
    return decorator
