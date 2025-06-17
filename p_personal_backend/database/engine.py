from contextlib import asynccontextmanager

from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

from p_personal_backend.config.Settings import Settings

settings = Settings()

engine = create_async_engine(url= settings.DB_URL)


#TO create a session to connect in database
LocalSession = sessionmaker(
    class_=AsyncSession,
    bind=engine,
    autoflush=False,
    expire_on_commit= False
)


@asynccontextmanager
async def create_session() -> AsyncSession:
    """
              Asynchronous context manager for managing db_services sessions.

              This function provides a safe way to manage db_services sessions in an asynchronous application. It ensures that
              sessions are properly created, errors are handled, and sessions are closed after use.

              Yields:
                  AsyncSession: An instance of the db_services session to perform db_services operations.

              Raises:
                  SQLAlchemyError: If a db_services-related error occurs, it is logged and re-raised for further handling.
              """
    async with LocalSession() as session:
        try:
            yield session
        except Exception as e:
            print(f'An error occurred: {e}')
            await session.rollback()
