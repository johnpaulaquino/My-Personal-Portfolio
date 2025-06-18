from datetime import date

from fastapi.params import Depends
from pydantic import BaseModel



class ProjectsSchema(BaseModel):
    live_url: str
    forks: int
    stars: int
    status: str
    title: str
    description: str
    date_update: date
    git_url: str

    # This is a JSON File and will extract this before returning in the server.
    techs: dict = dict(
        frontend = [],
        backend = [],
        others =[]
    )

    class Config:
        from_attributes = True



