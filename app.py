from fastapi import FastAPI
import uvicorn


from mp_backend.routes.login_routes import login
from mp_backend.routes.projects_routes import projects_router
from mp_backend.utils.app_utils import AppUtils

from mp_backend.config.Settings import Settings

settings = Settings()


title = "My Personal Portfolio"
app = FastAPI(
    lifespan=AppUtils.app_lifespan,
    title=title
)

#login
app.include_router(login)

#projects
app.include_router(projects_router)

if __name__ == '__main__':
    uvicorn.run('app:app', reload=True, port=settings.PORT)


