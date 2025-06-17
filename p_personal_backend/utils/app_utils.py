from p_personal_backend.config.Settings import Settings

settings = Settings()

class AppUtils:

    # this is the lifespan of the app
    @staticmethod
    async def app_lifespan(app):
        try:
            print(f'Server is starting at port {settings.PORT}..')
            yield
            print(f'Server is shutting down..')
        except Exception as e:
            print(f'An error occurred: {e}')