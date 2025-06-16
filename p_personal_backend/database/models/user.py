from sqlalchemy import String, Column, Integer

from p_personal_backend.database.models import Base

class Users(Base):
    __tablename__ = 'users'

    id : int = Column('id', Integer, primary_key=True,
                      index=True,autoincrement=True)
    username : str = Column('username', String, nullable=False)
    password : str = Column('password', String, nullable = False)
