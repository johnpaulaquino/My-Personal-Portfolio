


from pydantic import BaseModel

class TechsSchema(BaseModel):
    frontend: list[str]
    backend: list[str]
    others: list[str]

class SkillsInSchema(BaseModel):
    # This is a JSON File and will extract this before returning in the server.
    techs: TechsSchema

class SkillsOutSchema(BaseModel):
    # This is a JSON File and will extract this before returning in the server.
    id : int
    techs: TechsSchema

    class Config:
        from_attributes = True