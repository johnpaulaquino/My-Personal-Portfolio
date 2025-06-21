from sqlalchemy import select, update, func, text, delete
from sqlalchemy.exc import SQLAlchemyError

from mp_backend.database.engine import create_session
from mp_backend.database.models import Projects


class ProjectRepositories:

    @staticmethod
    async def insert_projects(projects):
        """
        This will add batch projects in database.
        :param projects: is an instance of Project object.
        :return: True if no error, otherwise raise an exception.
        """
        async with create_session() as db:
            try:
                db.add_all(projects)
                await db.commit()
                return True
            except Exception as e:
                await db.rollback()
                raise e

    @staticmethod
    async def find_project_by_title(title: str) -> bool:
        """
        This simply check if the data is existing in db or not using title.
        :param title: is the keyword to find the records in database.
        :return: False, if no data found, otherwise True.
        """
        async  with create_session() as db:
            try:
                # This is the query, and the ilike keyword is used to
                # make the search case-insensitive.
                stmt = (select(Projects.id).
                where(
                    Projects.title.ilike(title)
                ))
                # execute the query
                result = await db.execute(stmt)
                # fetch the data
                data = result.scalars().one_or_none()

                # Check if the data is no records, then return False, otherwise return True
                if not data:
                    return False

                return True
            except Exception as e:
                # if encounter error, raise it
                raise e

    @staticmethod
    async def find_project_by_id(project_id: str) -> bool:
        """
        This simply check if the data is existing in db or not using id.
        :param project_id: is the keyword to find the records in database.
        :return: False, if no data found, otherwise True.
        """
        async  with create_session() as db:
            try:
                # This is the query, and the ilike keyword is used to
                # make the search case-insensitive.
                stmt = (select(Projects.id).
                where(
                    Projects.id == project_id
                ))
                # execute the query
                result = await db.execute(stmt)
                # fetch the data
                data = result.scalars().one_or_none()

                # Check if the data is no records, then return False, otherwise return True
                if not data:
                    return False

                return True
            except Exception as e:
                # if encounter error, raise it
                raise e

    @staticmethod
    async def get_four_records():
        """
        To fetch all records in projects table.
        :return:
        """
        async with create_session() as db:
            try:
                result = await db.execute(select(Projects).limit(4))
                data = result.scalars().unique().all()
                return data
            except Exception as e:
                raise e

    @staticmethod
    async def get_projects_paginated(offset: int, limit: int):
        try:
            async with create_session() as db:
                stmt = select(Projects).offset(offset).limit(limit)
                result = await db.execute(stmt)
                data: list = result.scalars().all()
                return data
        except SQLAlchemyError as e:
            print(f'An error occurred {e}')
            return False

    @staticmethod
    async def get_specific_project(project_id: str):
        async with create_session() as db:
            try:
                result = await db.execute(select(
                    Projects
                ).where(
                    Projects.id == project_id
                ))
                data = result.scalar()
                return data
            except Exception as e:
                raise e

    @staticmethod
    async def update_project(project_id: str, projects: Projects):
        async with create_session() as db:
            try:
                stmt = (update(Projects).values(
                    live_url=projects.live_url,
                    forks=projects.forks,
                    stars=projects.stars,
                    status=projects.status,
                    title=projects.title,
                    description=projects.description,
                    date_update=projects.date_update,
                    git_url=projects.git_url,
                    tools=projects.tools
                ).where(
                    Projects.id == project_id
                ))
                await db.execute(stmt)
                await db.commit()
            except Exception as e:
                await db.rollback()
                raise e

    @staticmethod
    async def delete_project(project_id: str):
        async with create_session() as db:
            try:
                stmt = (delete(Projects)
                .where(
                    Projects.id == project_id
                ))
                await db.execute(stmt)
                await db.commit()
            except Exception as e:
                await db.rollback()
                raise e
