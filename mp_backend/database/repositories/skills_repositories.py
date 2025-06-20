from sqlalchemy import select, update

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
                data = result.scalars().all()
                return data
            except Exception as e:
                raise e



