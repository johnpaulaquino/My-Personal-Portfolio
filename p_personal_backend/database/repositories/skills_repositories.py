from sqlalchemy import select, update

from p_personal_backend.database.engine import create_session
from p_personal_backend.database.models import Skills


class SkillsRepositories:

    @staticmethod
    async def add_skills(skills: Skills):
        async with create_session() as db:
            try:
                db.add(skills)
                await db.commit()
                await db.refresh(skills)
            except Exception as e:
                await db.rollback()
                raise e

    @staticmethod
    async def get_all_skills():
        async with create_session() as db:
            try:
                result = await db.execute(select(Skills))
                data = result.scalars().all()
                return data
            except Exception as e:
                raise e

    # @staticmethod
    # async def update_skills(skill : Skills):
    #     async with create_session() as db:
    #         try:
    #             stmt = (update(Skills)
    #                     .values(
    #                 Skills.tools == skill.tools
    #             ))
    #             await db.execute(stmt)
    #             await db.commit()
    #             await db.refresh(skill)
    #         except Exception as e:
    #             await db.rollback()
    #             raise e

