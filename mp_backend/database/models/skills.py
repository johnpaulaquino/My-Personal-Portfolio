from sqlalchemy import Column, Integer
from sqlalchemy.dialects.postgresql import JSONB

from mp_backend.database.models import Base


class Skills(Base):
    __tablename__ = 'skills'
    id : int  = Column('id', Integer, primary_key = True, index = True)
    techs : dict = Column('techs', JSONB, nullable=True)