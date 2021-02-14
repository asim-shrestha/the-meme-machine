import uvicorn
import os 
from api import app, config


if __name__ == '__main__':
    uvicorn.run('asgi:app', host=config.HOST, port=config.PORT, debug=config.API_DEBUG)
