from mp_backend.database.engine import create_session
from mp_backend.database.models import Skills


class SkillsServices:

    @staticmethod
    async def add_skills(skills : Skills):
        async with create_session() as db:
            try:
                pass
            except Exception as e:
                raise e

