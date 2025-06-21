from sqlalchemy import select, update, delete

from mp_backend.database.engine import create_session
from mp_backend.database.models import Skills


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
    async def get_skills():
        async with create_session() as db:
            try:
                result = await db.execute(select(Skills))
                data = result.scalar()
                return data
            except Exception as e:
                raise e

    @staticmethod
    async def update_skills(skills_id: int, techs: dict):
        async with create_session() as db:
            try:
                stmt = (update(Skills)
                        .values(
                    techs=techs
                )
                        .where(Skills.id == skills_id))
                await db.execute(stmt)
                await db.commit()
            except Exception as e:
                await db.rollback()
                raise e

    @staticmethod
    async def find_skills_by_id(skills_id: int):
        async with create_session() as db:
            try:
                result = await db.execute(select(
                    Skills.id).where(Skills.id == skills_id))

                data = result.scalar()
                return data
            except Exception as e:
                raise e

    @staticmethod
    async def delete_skills(skills_id: int):
        async with create_session() as db:
            try:
                stmt = (delete(Skills)
                        .where(Skills.id == skills_id))
                await db.execute(stmt)
                await db.commit()
            except Exception as e:
                await db.rollback()
                raise e
