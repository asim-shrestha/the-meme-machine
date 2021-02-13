from api import config


def get_full_url(folder, id_, alt: str = '?alt=media'):
    return f'{config.FIRESTORE_URL}{folder}%2F{id_}{alt}'
