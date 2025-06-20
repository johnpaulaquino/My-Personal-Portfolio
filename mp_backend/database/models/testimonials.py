from sqlalchemy import String, Column, Integer

from mp_backend.database.models import Base


class Testimonials(Base):
    __tablename__ = 'testimonials'

    id : int = Column('id', Integer, primary_key=True, index=True)
    services : str = Column('services', String, nullable=False)
    message : str =Column('message', String, nullable=False)
    name : str = Column('name', String, nullable = False)
    comp_name : str = Column('comp_name', String, nullable=False)
