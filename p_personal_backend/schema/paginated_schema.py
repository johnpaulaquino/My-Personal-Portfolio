from pydantic import BaseModel


class Paginated(BaseModel):
    limit: int = 10
    skip: int = 1
