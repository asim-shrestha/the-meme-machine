from api import app

from .user import router as user_router
from .template import router as template_router

app.include_router(user_router, prefix='/user', tags=['User'])
app.include_router(template_router, prefix='/template', tags=['Template'])
