import os
from pathlib import Path

from distutils.util import strtobool


class BaseConfig:
    APT_HOST = '127.0.0.1'
    API_PORT = 5000
    API_DEBUG = True

    # DB Config
    POSTGRES_HOST = '127.0.0.1'
    POSTGRES_USER = 'postgres'
    POSTGRES_PW = 'password'
    POSTGRES_DB = 'main'
    SQLALCHEMY_DATABASE_URI = ''

    FIRESTORE_URL = 'https://firebasestorage.googleapis.com/v0/b/legacy-meme.appspot.com/o'
    TMP_FOLDER = Path(__file__).parent / '_tmp'

    def __init__(self):
        env_vars = [v for v in os.environ.keys() if (v in vars(BaseConfig)) and not v.startswith('__')]
        [self._apply_env_var(k) for k in env_vars]

        if not self.SQLALCHEMY_DATABASE_URI:
            self.SQLALCHEMY_DATABASE_URI = f'postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PW}@{self.POSTGRES_HOST}/{self.POSTGRES_DB}'

        if not self.TMP_FOLDER.exists():
            self.TMP_FOLDER.mkdir()

    def _apply_env_var(self, env_var) -> None:
        """ Load environment variables"""
        v: str = os.environ[env_var]

        try:
            type_ = type(getattr(BaseConfig, env_var))
            if type_ is bool:
                v = strtobool(v)
            else:
                v = type_(v)
        except (TypeError, ValueError):
            print(
                f'[FAILED] TYPE CASTING ENV VARIABLE {env_var} TO TYPE {type(getattr(BaseConfig, env_var))}')
            print(
                f'[FAILED] ENV VARIABLE {env_var} MAY PRODUCE AN UNEXPECTED ERROR')
        finally:
            print(f'[config] {env_var}={v}')
            setattr(self, env_var, v)
