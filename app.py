from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware

from mp_backend.routes.certificates_routes import certificates_router
from mp_backend.routes.login_routes import login
from mp_backend.routes.projects_routes import projects_router
from mp_backend.routes.skillls_routes import skills_router
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
#skills
app.include_router(skills_router)
#
app.include_router(certificates_router)

origins =[
    'http://localhost:5173'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)
if __name__ == '__main__':
    uvicorn.run('app:app', reload=True, port=settings.PORT)


