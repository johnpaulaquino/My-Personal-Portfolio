from pydantic_settings import BaseSettings,SettingsConfigDict
from dotenv import load_dotenv

# To load the environment variables
load_dotenv()


# Inherits the Base setings
class Settings(BaseSettings):
    PORT : int

    # configuration for the settings
    class Config:
        env_file = SettingsConfigDict(
            env_file='.env',
            env_file_encoding='utf-8'
        )