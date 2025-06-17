from fastapi import HTTPException, status
from p_personal_backend.database.models import Projects


class ProjectServices:

    @staticmethod
    async def insert_project(projects: Projects,
                             curr_user):
        try:
            if not curr_user:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You don't have rights to access this",
                    headers={"WWW-Authenticate":"Bearer"}
                )

        except Exception as e:
            raise e