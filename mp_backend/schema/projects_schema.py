from datetime import date
from typing import List

from fastapi.params import Depends
from pydantic import BaseModel, Field


class ToolsSchema(BaseModel):
    technologies: str


class ProjectsInputSchema(BaseModel):
    live_url: str
    forks: int
    stars: int
    status: str
    title: str
    description: str
    date_update: date
    git_url: str
    # This is a JSON File and will extract this before returning in the server.
    tools: ToolsSchema

    class Config:
        from_attributes = True


class ProjectsSchema(BaseModel):
    id: str
    live_url: str | None
    forks: int
    stars: int
    status: str
    title: str
    description: str | None
    date_update: date
    git_url: str
    tools: List[ToolsSchema] = []


    class Config:
        from_attributes = True


class ProjectsOutSchema(BaseModel):
    Projects: list[ProjectsSchema]

    class Config:
        from_attributes = True
