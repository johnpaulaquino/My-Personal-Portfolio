from sqlalchemy import Column, Integer, ForeignKey, String, Date
from sqlalchemy.dialects.postgresql import JSONB
from datetime import date

from mp_backend.database.models import Base


class Projects(Base):
    __tablename__ = 'projects'
    id: int = Column('id', Integer, primary_key=True,
                     autoincrement=True, index=True)
    live_url: str = Column('live_url', String, nullable=True)
    forks: int = Column('forks', Integer, nullable=True)
    stars: int = Column('stars', Integer, nullable=True)
    status: str = Column('status', String, nullable=False) #private or public
    title: str = Column('title', String, nullable=False, index=False)
    description: str = Column('description', String, nullable=False)
    date_update: date = Column('date_update', Date, nullable=False)
    git_url: str = Column('git_url', String, nullable=True)

    # This is a JSON File and will extract this before returning in the server.
    tools: dict = Column('tools', JSONB, nullable=False)

    def __init__(self, live_url,
                 forks, stars, title,
                 description, date_update,
                 git_url, tools,status, **kw):
        super().__init__(**kw)

        self.live_url = live_url
        self.status = status
        self.forks = forks
        self.stars = stars
        self.title = title
        self.description = description
        self.date_update = date_update
        self.git_url = git_url
        self.tools = tools
