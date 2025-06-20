

from pydantic import BaseModel, Field


class Paginated(BaseModel):
    limit: int = Field(10, ge=10)
    skip: int = Field(1, ge=1)
