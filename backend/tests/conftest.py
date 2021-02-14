import pytest
from api import app, config, models, engine
from fastapi.testclient import TestClient

@pytest.fixture()
def test_client():
    yield TestClient(app)
