from fastapi import FastAPI
import uvicorn

from p_personal_backend.config.Settings import Settings
from p_personal_backend.routes.login_routes import login
from p_personal_backend.routes.projects_routes import projects_router
from p_personal_backend.utils.app_utils import AppUtils

settings = Settings()

app = FastAPI(
    lifespan=AppUtils.app_lifespan
)

#login
app.include_router(login)

#projects
app.include_router(projects_router)

if __name__ == '__main__':
    uvicorn.run('app:app', reload=True, port=settings.PORT)


