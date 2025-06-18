from fastapi import APIRouter
from fastapi.params import Depends

from p_personal_backend.dependencies.auth_dependencies import AuthDependencies
from p_personal_backend.schema.projects_schema import ProjectsSchema
from p_personal_backend.services.projects_services import ProjectServices

projects_router = APIRouter(
    tags=['Projects'],
    prefix='/projects'
)

@projects_router.post('/add')
async def insert_project(projects: ProjectsSchema,
                         curr_user : str =  Depends(AuthDependencies.get_current_user)):
    """
    # This route is to add the information of project in database.
    ### :param projects: is a schema that provides a required data in the body.
    ### :param curr_user: is a dependency that will check if the user is authenticated and get the info.
    ### :return: JSONResponse if no errors, otherwise raise an HTTPException.
    """
    try:

       return await ProjectServices.insert_project(projects)
    except Exception as e:
        raise e

@projects_router.get('/get-all')
async def get_all_records(curr_user : str =  Depends(AuthDependencies.get_current_user)):
    try:
        return await ProjectServices.get_all_records()
    except Exception as e:
        raise e