from sqlalchemy import select
from p_personal_backend.database.engine import create_session
from p_personal_backend.database.models import Projects


class ProjectRepositories:

    @staticmethod
    async def insert_project(project : Projects):

        async with create_session() as db:
            try:
                is_exist = await ProjectRepositories.is_project_exist(project.title)
                if is_exist:
                    raise Exception('This project is already exist!')
                await db.add(project)
                await db.commit()
                await db.refresh(Projects)
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
                stmt = (select(Projects.id).
                        where(
                    Projects.title.ilike(title)
                ))
                result = await db.execute(stmt)
                data = result.scalars().one_or_none()

                #Check if the data is no records, then return False, otherwise return True
                if not data:
                    return False

                return True
            except Exception as e:
                #if encounter error, raise it
                raise e

