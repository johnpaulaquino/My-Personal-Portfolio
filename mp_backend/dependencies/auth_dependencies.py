from fastapi.security import OAuth2PasswordBearer
from fastapi.params import Depends
from jose import jwt,ExpiredSignatureError
from fastapi import HTTPException,status

from mp_backend.config.Settings import Settings
from mp_backend.database.repositories.user_repositories import UserRepositories

oauth2_scheme = OAuth2PasswordBearer(tokenUrl = '/auth/token')
settings = Settings()

class AuthDependencies:

    @staticmethod
    async def get_current_user(token : str = Depends(oauth2_scheme)):
        try:
            payload = jwt.decode(token, key=settings.JWT_KEY, algorithms=[settings.JWT_ALGORITHM])

            # check if there is a payload
            if not payload:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail='Could not validate credentials!',
                    headers={'WWW-Authenticate': 'Bearer'}
                )

            # check id
            user_id = payload.get('user_id')
            if not user_id:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail='Could not validate credentials!',
                    headers={'WWW-Authenticate': 'Bearer'}
                )

            curr_user = await UserRepositories.find_user_by_id(user_id)

            if not curr_user:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail='Could not validate credentials!',
                    headers={'WWW-Authenticate': 'Bearer'}
                )
            return curr_user
        except ExpiredSignatureError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Token is expired, please back to log in!',
                headers={'WWW-Authenticate': 'Bearer'}
            )





