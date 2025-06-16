from fastapi import FastAPI
import uvicorn

from p_personal_backend.config.Settings import Settings
from p_personal_backend.utils.app_utils import AppUtils

settings = Settings()

app = FastAPI(
    lifespan=AppUtils.app_lifespan
)







if __name__ == '__main__':
    uvicorn.run('app:app', reload=True, port=settings.PORT)



