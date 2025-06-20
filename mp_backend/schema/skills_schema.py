


from pydantic import BaseModel

class TechsSchema(BaseModel):
    frontend: list[str]
    backend: list[str]
    others: list[str]

class SkillsInSchema(BaseModel):
    # This is a JSON File and will extract this before returning in the server.
    techs: TechsSchema
