from sqlalchemy import Column, String, Integer, ForeignKey

from mp_backend.database.models import Base


class ImageUrl(Base):
    __tablename__ = 'img_url'
    id : int =  Column('id', Integer, primary_key=True, index =True)
    project_id : int = Column('project_id', Integer, ForeignKey(
        'projects.id', ondelete='Cascade'
    ), nullable= True)

    tes_id: int = Column('tes_id', Integer, ForeignKey(
        'testimonials.id', ondelete='Cascade'
    ), nullable=True)

    proj_img: str = Column('proj_img', String, nullable=False)
    proj_img_id: str = Column('proj_img_id', String, nullable=False)
    tes_img: str = Column('tes_img', String, nullable=False)
    tes_img_id: str = Column('tes_img_id', String, nullable=False)