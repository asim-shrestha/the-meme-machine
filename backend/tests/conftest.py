import pytest
from api import app, config, models, engine
from fastapi.testclient import TestClient
from sqlalchemy_utils import drop_database, create_database, database_exists


@pytest.fixture(autouse=True)
def clean_db():
    if database_exists(config.SQLALCHEMY_DATABASE_URI):
        drop_database(config.SQLALCHEMY_DATABASE_URI)

    create_database(config.SQLALCHEMY_DATABASE_URI)
    models.Base.metadata.create_all(bind=engine)


@pytest.fixture()
def test_client():
    yield TestClient(app)
