from sqlalchemy import Column, String, Date, Integer

from mp_backend.database.models import Base


class Certificates(Base):
    __tablename__ = 'certificates'

    id: int = Column('id', Integer, primary_key=True, index=True)
    title: str = Column('title', String, index=True, nullable=False)
    provider : str = Column('provider', String, nullable= False, index=True)
    date_issued = Column('date_issued', Date, nullable=False)
    cred_id : str = Column('cred_id', String, nullable=False, index=True)
