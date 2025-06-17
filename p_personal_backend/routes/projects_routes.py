from fastapi import APIRouter
from fastapi.params import Depends

from p_personal_backend.dependencies.auth_dependencies import AuthDependencies
from p_personal_backend.schema.projects_schema import ProjectsSchema

projects_router = APIRouter(
    tags=['Projects'],
    prefix='/projects'
)

@projects_router.post('/add')
async def insert_project(projects: ProjectsSchema,
                         curr_user : str =  Depends(AuthDependencies.get_current_user)):
    try:
        pass
    except Exception as e:
        raise e