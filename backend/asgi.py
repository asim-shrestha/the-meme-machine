import uvicorn

from api import app, config

if __name__ == '__main__':
    uvicorn.run('asgi:app', host=config.APT_HOST, port=config.API_PORT, debug=config.API_DEBUG)
