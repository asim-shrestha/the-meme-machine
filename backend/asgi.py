import uvicorn
import os 
from api import app, config

LOCALHOST = '0.0.0.0'
HOST = LOCALHOST
PORT = os.environ.get('PORT')
if PORT == None: PORT = 5000
PORT = int(PORT)

if __name__ == '__main__':
    uvicorn.run('asgi:app', host=config.HOST, port=PORT, debug=config.API_DEBUG)
