from pydantic_settings import BaseSettings,SettingsConfigDict
from dotenv import load_dotenv

# To load the environment variables
load_dotenv()


# Inherits the Base settings
class Settings(BaseSettings):
    #app variables
    PORT : int

    #Database variables
    DB_URL : str

    ENVIRONMENT : str = 'dev'

    #Cloudinary variables
    C_NAME : str
    C_KEY : str
    C_SECRET : str
    C_SECURE : bool

    #JWT
    JWT_KEY : str
    JWT_REFRESH_ACCESS_KEY : int
    JWT_ALGORITHM : str

    #Environment.
    # This is to set the environment of the



    # configuration for the settings
    class Config:
        env_file = SettingsConfigDict(
            env_file='.env',
            env_file_encoding='utf-8'
        )
        model_config = 'ignored_types'