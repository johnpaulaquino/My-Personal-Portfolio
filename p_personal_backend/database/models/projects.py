from sqlalchemy import Column, Integer, ForeignKey, String, Date
from sqlalchemy.dialects.postgresql import JSONB

from p_personal_backend.database.models import Base


class Projects(Base):
    __tablename__ = 'projects'
    id : int = Column('id',Integer, primary_key = True,
                      autoincrement=True, index=True)
    forks : int = Column('forks', Integer, nullable=True)
    stars : int = Column('stars', Integer, nullable= True)
    status : int = Column('status', String, nullable =True)
    title : str = Column('title', String, nullable=False, index=True)
    description : str = Column('desctiption', String, nullable =False)
    date_update : str = Column('date_update', Date, nullable= False)
    git_url : str = Column('git_url', String, nullable= True)

    # This is a JSON File and will extract this before returning in the server.
    techs : dict = Column('techs', JSONB, nullable=True)

