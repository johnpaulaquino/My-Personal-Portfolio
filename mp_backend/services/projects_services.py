import json

from fastapi import HTTPException, status
from fastapi.encoders import jsonable_encoder
from starlette.responses import JSONResponse

from mp_backend.database.models import Projects
from mp_backend.database.repositories.project_repositories import ProjectRepositories
from mp_backend.schema.paginated_schema import Paginated
from mp_backend.schema.projects_schema import ProjectsInputSchema, ProjectsSchema, ProjectsOutSchema
from mp_backend.utils.messaging_utils import MessagingUtils
from mp_backend.validation.project_validation import ProjectValidation


class ProjectServices:

    @staticmethod
    async def insert_project(projects: ProjectsInputSchema):
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
                tools=jsonable_encoder(projects.tools),
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

            is_exist = await ProjectRepositories.find_project_by_title(project.title)

            if is_exist:
                return MessagingUtils.message_response(
                    res_status='failed',
                    status_code=status.HTTP_400_BAD_REQUEST,
                    message='project is already exist!',
                )

            await ProjectRepositories.insert_project(project)

            return MessagingUtils.message_response(
                res_status='ok',
                status_code=status.HTTP_200_OK,
                message='successfully created!',
            )
        except Exception as e:
            raise e

    @staticmethod
    async def get_ten_records():
        try:
            data = await ProjectRepositories.get_ten_records()
            if not data:
                return MessagingUtils.message_response(
                    res_status='ok',
                    status_code=status.HTTP_200_OK,
                    message='no data to fetch!',
                )

            data = ProjectsOutSchema.model_validate({"Projects":data})
            data.model_dump(by_alias=True)
            return MessagingUtils.message_response(
                res_status='ok',
                status_code=status.HTTP_200_OK,
                message='retrieved!',
                data=jsonable_encoder(data.Projects)
            )
        except Exception as e:
            raise e

    @staticmethod
    async def get_projects_paginated(paginated: Paginated):
        try:
            offset = (paginated.skip - 1) * paginated.limit
            data = await ProjectRepositories.get_projects_paginated(offset=offset, limit=paginated.limit)
            if not data:
                return MessagingUtils.message_response(
                    res_status='ok',
                    status_code=status.HTTP_200_OK,
                    message='no data to fetch!',
                )
            data = ProjectsOutSchema.model_validate({"Projects": data})
            data.model_dump(by_alias=True)
            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                message='retrieved',
                data=jsonable_encoder(data.Projects)
            )
        except Exception as e:
            raise e

    @staticmethod
    async def get_specific_project(project_id: int):
        try:
            # get the data from database
            data = await ProjectRepositories.get_specific_project(project_id)
            # check if the data is empty, then raise an exception
            if not data:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_200_OK,
                    res_status='ok',
                    message='No records to fetch!'
                )
            # to make the object dictionary and jsonable encoder, to make the dict a valid json format
            data = jsonable_encoder(ProjectsSchema.model_validate(data))
            # return a json response
            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                message='retrieved!',
                data=data
            )
        except Exception as e:
            raise e

    @staticmethod
    async def delete_project(project_id: int):
        try:
            is_exist = await ProjectRepositories.find_project_by_id(project_id)
            if not is_exist:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    res_status='error',
                    message='Project is not exist!'
                )
            # delete the project if exist
            await ProjectRepositories.delete_project(project_id)
            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                message='deleted!'
            )

        except Exception as e:
            raise e

    @staticmethod
    async def update_project(project_id: int, projects: ProjectsInputSchema):
        try:
            is_exist = await ProjectRepositories.find_project_by_id(project_id)
            if not is_exist:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    res_status='failed',
                    message='project is not exist!'
                )
            project = Projects(
                live_url=projects.live_url,
                date_update=projects.date_update,
                status=projects.status,
                git_url=projects.git_url,
                description=projects.description,
                title=projects.title,
                tools=jsonable_encoder(projects.tools),
                stars=projects.stars,
                forks=projects.forks
            )

            is_project_exist = await ProjectRepositories.find_project_by_title(project.title)
            if is_project_exist:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    res_status='failed',
                    message='project is already exist!'
                )
            await ProjectRepositories.update_project(project_id,project)
            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                res_status='ok',
                message='successfully updated!'
            )
        except Exception as e:
            raise e
