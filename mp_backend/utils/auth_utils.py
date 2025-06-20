from datetime import timezone, datetime, timedelta

from jose import jwt
from passlib.context import CryptContext


from mp_backend.config.Settings import Settings

settings = Settings()

password_cont = CryptContext(schemes = ['argon2'] , deprecated = 'auto')


class AuthUtils:

    # to hash password
    @staticmethod
    def hash_plain_password(plain_password: str):
        # hash the password
        return password_cont.hash(secret=plain_password)

    # to verify user password
    @staticmethod
    def verify_hashed_password(plain_password, hashed_password):
        return password_cont.verify(secret=plain_password, hash=hashed_password)

    @staticmethod
    def authenticate_user(data: dict, plain_password: str):
        try:
            if not AuthUtils.verify_hashed_password(
                    plain_password=plain_password,
                    hashed_password=data['password']):
                return False
            return True
        except Exception as e:
            print(f'An error occurred {e}')
            return False

    @staticmethod
    def generate_access_token(data: dict):
        to_encode = data.copy()
        expires = datetime.now(timezone.utc) + timedelta(days=3)

        to_encode.update({'exp': expires})
        payload = jwt.encode(to_encode, settings.JWT_KEY, algorithm=settings.JWT_ALGORITHM)
        return payload

    @staticmethod
    def generate_refresh_access_token(data: dict):
        to_encode = data.copy()
        expires = datetime.now(timezone.utc) + timedelta(days=settings.JWT_REFRESH_ACCESS_KEY)
        to_encode.update({'exp': expires})
        payload = jwt.encode(to_encode, settings.JWT_KEY, algorithm=settings.JWT_ALGORITHM)
        return payload
