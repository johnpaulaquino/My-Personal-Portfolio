import json

from fastapi import HTTPException, status
from fastapi.encoders import jsonable_encoder
from starlette.responses import JSONResponse


from p_personal_backend.database.models import Projects
from p_personal_backend.database.repositories.project_repositories import ProjectRepositories
from p_personal_backend.schema.projects_schema import ProjectsSchema
from p_personal_backend.validation.project_validation import ProjectValidation


class ProjectServices:



    @staticmethod
    async def insert_project(projects: ProjectsSchema):
        """"
            # This service is to add the information of project in database.
            ### :param projects: is a schema that provides a required data in the body.
            ### :return: JSONResponse if no errors, otherwise raise an HTTPException.
        """
        try:
            project = Projects(
                live_url=projects.live_url,
                git_url=projects.git_url,
                description=projects.description,
                date_update=projects.date_update,
                forks=projects.forks,
                stars=projects.stars,
                techs=projects.techs,
                title=projects.title,
                status=projects.status
            )

            try:
                # validate the data before inserting. This will throw an error if there is an error.
                ProjectValidation.validate_projects(project)
            except Exception as e:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f'{e}'
                )

            is_exist = await ProjectRepositories.is_project_exist(project.title)

            if is_exist:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f'This project is already exist!'
                )

            await ProjectRepositories.insert_project(project)

            return JSONResponse(
                status_code=status.HTTP_201_CREATED,
                content={'status': 'ok', 'message':
                    'successfully created project!'}
            )
        except Exception as e:
            raise e

    @staticmethod
    async def get_all_records():
        try:
            data = await ProjectRepositories.get_all_records()
            if not data:
                return JSONResponse(
                    status_code=status.HTTP_200_OK,
                    content= {'status': 'ok', 'message': 'No records found.'}
                )
            data = [ProjectsSchema.model_validate(user) for user in data]

            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={'status': 'ok', 'message': 'Successfully retrieved.',
                         'data': jsonable_encoder(data)}
            )
        except Exception as e:
            raise e