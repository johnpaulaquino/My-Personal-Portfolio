from sqlalchemy import select
from sqlalchemy.exc import SQLAlchemyError

from p_personal_backend.database.engine import create_session
from p_personal_backend.database.models import Projects


class ProjectRepositories:

    @staticmethod
    async def insert_project(project : Projects):
        """
            This to add project information in database.
        :param project: is an instance of Project object.
        :return: True if no error, otherwise raise an exeption.
        """
        async with create_session() as db:
            try:
                db.add(project)
                await db.commit()
                await db.refresh(project)
                return True
            except Exception as e:
                await db.rollback()
                raise e

    @staticmethod
    async def is_project_exist(title : str) -> bool:
        """
        This simply check if the data is existing in db or not.
        :param title: is the keyword to find the records in database.
        :return: False, if no data found, otherwise True.
        """
        async  with create_session() as db:
            try:
                #This is the query, and the ilike keyword is used to
                # make the search case-insensitive.
                stmt = (select(Projects.id).
                        where(
                    Projects.title.ilike(title)
                ))
                #execute the query
                result = await db.execute(stmt)
                #fetch the data
                data = result.scalars().one_or_none()

                #Check if the data is no records, then return False, otherwise return True
                if not data:
                    return False

                return True
            except Exception as e:
                #if encounter error, raise it
                raise e

    @staticmethod
    async def get_all_records():
        """
        To fetch all records in projects table.
        :return:
        """
        async with create_session() as db:
            try:
                result = await db.execute(select(Projects))
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
    async def update_project(project):
        pass

