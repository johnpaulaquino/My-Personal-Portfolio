

from sqlalchemy import select, and_
from sqlalchemy.exc import SQLAlchemyError

from p_personal_backend.database.engine import create_session
from p_personal_backend.database.models import Users


class UserRepositories:
    @staticmethod
    async def find_user_by_username(username: str):
        async with create_session() as db:
            try:
                stmt = select(Users).where(and_(Users.username == username))
                result = await db.execute(stmt)
                data = result.scalars().one_or_none()

                if not data:
                    return False

                return data
            except SQLAlchemyError as e:
                print(f'An error occurred {e}')
                return False

    @staticmethod
    async def find_user_by_id(user_id: int):
        async with create_session() as db:
            try:
                stmt = select(Users).where(and_(Users.id == user_id))
                result = await db.execute(stmt)
                data = result.scalars().one_or_none()

                if not data:
                    return False

                return data
            except SQLAlchemyError as e:
                print(f'An error occurred {e}')
                return False