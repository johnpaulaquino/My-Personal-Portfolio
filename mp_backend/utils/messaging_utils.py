from fastapi import status
from fastapi.encoders import jsonable_encoder
from starlette.responses import JSONResponse


class MessagingUtils:
    @staticmethod
    def message_response(message: str,
                         status_code: status,
                         res_status: str = 'ok', data  = None):
        if data:
            return JSONResponse(
                status_code=status_code,
                content= {'status': res_status,
                         'message': f'successfully {message}',
                         'data': data}
            )
        return JSONResponse(
            status_code=status_code,
            content={'status': res_status,
                     'message': message}
        )
