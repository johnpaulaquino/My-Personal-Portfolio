import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
from mp_backend.config.Settings import Settings
import asyncio

settings = Settings()

# configuration
cloudinary.config(
    cloud_name=settings.C_NAME,
    api_key=settings.C_KEY,
    api_secret=settings.C_SECRET,
    secure=settings.C_SECURE
)


class CloudinaryServices:

    @staticmethod
    async def upload_image(url_img: str, url_id: str) -> list:
        result = await asyncio.to_thread(
            cloudinary.uploader.upload,
            url_img,
            public_id=url_id,
            overwrite=True
        )
        url = result.get("url")
        public_url = result.get('public_id')

        return [url, public_url]
