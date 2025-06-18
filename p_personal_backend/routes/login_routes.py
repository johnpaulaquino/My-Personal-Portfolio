from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security.oauth2 import OAuth2PasswordRequestForm

from p_personal_backend.database.models import user
from p_personal_backend.database.repositories.user_repositories import UserRepositories
from p_personal_backend.schema.users_schema import UsersOut
from p_personal_backend.utils.auth_utils import AuthUtils

login = APIRouter(
    tags=['Authentication'],
    prefix='/auth'
)


@login.post('/token', status_code=status.HTTP_200_OK)
async def login_for_access_token(form_data : OAuth2PasswordRequestForm = Depends()):
    try:
        user_cred = await UserRepositories.find_user_by_username(form_data.username)

        if not user_cred:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Username not found!',
                headers={'WWW-Authenticate': 'Bearer'}
            )
        user_cred = UsersOut.model_validate(user_cred)
        if not AuthUtils.authenticate_user(user_cred.model_dump(), form_data.password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Incorrect Password!',
                headers={'WWW-Authenticate': 'Bearer'}
            )


        access_token = AuthUtils.generate_access_token(
            {'user_id': user_cred.id,
             'username': user_cred.username})

        return {'access_token': access_token,
                'access_type': 'bearer'}
    except Exception as e:
        print(f'An error occurred {e}')
        raise e