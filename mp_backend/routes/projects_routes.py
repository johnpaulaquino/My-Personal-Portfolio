from fastapi import APIRouter, status
from fastapi.encoders import jsonable_encoder
from fastapi.params import Depends
from starlette.responses import JSONResponse

from mp_backend.database.repositories.project_repositories import ProjectRepositories
from mp_backend.dependencies.auth_dependencies import AuthDependencies
from mp_backend.schema.paginated_schema import Paginated
from mp_backend.schema.projects_schema import ProjectsInputSchema, ProjectsSchema, ProjectsOutSchema
from mp_backend.services.projects_services import ProjectServices

projects_router = APIRouter(
    tags=['Projects'],
    prefix='/projects',
    dependencies=[Depends(AuthDependencies.get_current_user)]
)

@projects_router.post('/add')
async def insert_project(page: int = 1):
    """
    ## This route is to add the information of project in database.
    ### :param projects: is a schema that provides a required data in the body.
    ### :param curr_user: is a dependency that will check if the user is authenticated and get the info.
    ### :return: JSONResponse if no errors, otherwise raise an HTTPException.
    """
    try:

       return await ProjectServices.insert_project(page)
    except Exception as e:

        raise e

@projects_router.get('/first-four')
async def get_four_records():
    """
    This will get the first ten records of the projects.
    :return: JSONResponse based on the services.
    """
    try:
        return await ProjectServices.get_four_records()
    except Exception as e:
        raise e

@projects_router.get('/paginated')
async def get_projects_paginated(paginated : Paginated =  Depends()):
    """
    This will to limit and return the records using pagination.
    :param paginated: is the schema, to get the limit and offset.
    :return: JSONResponse based on the services.
    """
    try:
        return await ProjectServices.get_projects_paginated(paginated)
    except Exception as e:
        raise e

@projects_router.get('/{project_id}')
async def get_specific_project(project_id : str,
                               ):
    try:
        data = await ProjectServices.get_specific_project(project_id)
        return data
    except Exception as e:
        raise e

@projects_router.delete("/delete/{project_id}")
async def delete_project(project_id:str ):
    """
    ## This function is to delete the specific project based on its ID.
    ### :param project_id: is a path query, to find the specific project that is need to delete.
    ### :return: JSONResponse based on the services.
    """
    try:
        return await ProjectServices.delete_project(project_id)
    except Exception as e:
        raise e

@projects_router.patch("/update/{project_id}")
async def update_project(project_id:str, project : ProjectsInputSchema ):
    """
    ## This function is to update the specific project based on its ID.
    ### :param project_id: is a path query, to find the specific project that is need to update.
    ### :param project: is a project schema, which can be used to get the input of the user.
    ### :return: JSONResponse based on the services.
    """
    try:

        return await ProjectServices.update_project(project_id, project)
    except Exception as e:
        raise e