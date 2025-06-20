from datetime import date
from typing import List

from fastapi.params import Depends
from pydantic import BaseModel, Field


class ToolsSchema(BaseModel):
    technologies: list[str]


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
    id: int
    live_url: str
    forks: int
    stars: int
    status: str
    title: str
    description: str
    date_update: date
    git_url: str
    tools: ToolsSchema

    class Config:
        from_attributes = True


class ProjectsOutSchema(BaseModel):
    Projects: list[ProjectsSchema]

    class Config:
        from_attributes = True
