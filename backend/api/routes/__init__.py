from api import app

from .template import router as template_router
from .meme import router as meme_router

app.include_router(template_router, prefix='/template', tags=['Template'])
app.include_router(meme_router, prefix='/meme', tags=['Meme'])
