from datetime import datetime

import requests
from fastapi import status
from fastapi.encoders import jsonable_encoder

from mp_backend.config.Settings import Settings
from mp_backend.database.models import Projects
from mp_backend.database.repositories.project_repositories import ProjectRepositories
from mp_backend.schema.paginated_schema import Paginated
from mp_backend.schema.projects_schema import ProjectsInputSchema, ProjectsSchema, ProjectsOutSchema
from mp_backend.utils.messaging_utils import MessagingUtils
settings = Settings()


class ProjectServices:

    @staticmethod
    async def insert_project(page: int = 1):
        try:
            headers = {
                'Accept': 'application/vnd.github+json',
                'Authorization': f'token {settings.GIT_TOKEN}'  # Only if using auth
            }
            url = f'https://api.github.com/user/repos'
            params = {
                'per_page': 100,
                'page': page,
                'sort': 'updated'
            }
            response = requests.get(url, headers=headers, params=params)

            if response.status_code != 200:
                return MessagingUtils.message_response(
                    status_code=response.status_code,
                    message=response.reason,
                    res_status='failed'
                )
            repos = response.json()
            users = settings.GIT_USERNAME.split(',') if settings.GIT_USERNAME else []

            data = list(filter(lambda x: x['owner']["login"] in users, repos))

            project_list = []
            for dt in data:
                formatted_date = datetime.strptime(dt['updated_at'], '%Y-%m-%dT%H:%M:%SZ')
                is_exist = await ProjectRepositories.find_project_by_title(dt['name'])
                if not is_exist:
                    projects = Projects(
                        id=str(dt['id']),
                        live_url='',
                        git_url=dt['html_url'],
                        description=dt['description'],
                        date_update=formatted_date.date(),
                        forks=dt['forks_count'],
                        stars=dt['stargazers_count'],
                        tools=jsonable_encoder(dt['topics']),
                        title=dt['name'],
                        status=dt['visibility'])

                    project_list.append(projects)
            if not project_list:
                return MessagingUtils.message_response(
                    res_status='ok',
                    status_code=status.HTTP_200_OK,
                    message='All projects are already inserted!'
                )

            await ProjectRepositories.insert_projects(project_list)
            return MessagingUtils.message_response(
                res_status='ok',
                status_code=status.HTTP_200_OK,
                message='successfully created!'
            )

        except Exception as e:
            raise e

    @staticmethod
    async def get_four_records():
        try:
            data = await ProjectRepositories.get_four_records()
            if not data:
                return MessagingUtils.message_response(
                    res_status='ok',
                    status_code=status.HTTP_200_OK,
                    message='no data to fetch!',
                )

            data = ProjectsOutSchema.model_validate({"Projects": data})
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
    async def get_specific_project(project_id: str):
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
    async def delete_project(project_id: str):
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
    async def update_project(project_id: str, projects: ProjectsInputSchema):
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
            await ProjectRepositories.update_project(project_id, project)
            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                res_status='ok',
                message='successfully updated!'
            )
        except Exception as e:
            raise e
