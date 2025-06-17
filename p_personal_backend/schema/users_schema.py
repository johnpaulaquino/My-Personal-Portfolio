from pydantic import BaseModel



class UsersOut(BaseModel):
    id: int
    username: str
    password: str

    class Config:
        from_attributes = True


