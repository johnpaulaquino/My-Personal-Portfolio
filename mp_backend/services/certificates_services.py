from fastapi import status
from fastapi.encoders import jsonable_encoder

from mp_backend.database.models import Certificates
from mp_backend.database.repositories.certificates_repositories import CertificatesRepositories
from mp_backend.schema.certificates_schema import CertificatesInSchema, CertificatesOutSchema, \
    CertificatesMultipleOutSchema
from mp_backend.utils.messaging_utils import MessagingUtils


class CertificatesServices:

    @staticmethod
    async def add_certificate(certificate : CertificatesInSchema):
        try:
            certs = Certificates(
                title=certificate.title,
                cred_id=certificate.cred_id,
                provider=certificate.provider,
                date_issued=certificate.date_issued
            )
            is_exist = await CertificatesRepositories.get_cert_by_cred_id(certs.cred_id)

            if is_exist:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_200_OK,
                    message='This cert is already added!',
                    res_status='ok'
                )

            await CertificatesRepositories.add_certificate(certs)
            return MessagingUtils.message_response(
                status_code=status.HTTP_201_CREATED,
                message='Successfully added!',
                res_status='ok'
            )
        except Exception as e:
            raise e

    @staticmethod
    async def get_four_records():
        try:
            data = await CertificatesRepositories.get_four_records()
            if not data:
                return  MessagingUtils.message_response(
                    status_code = status.HTTP_200_OK,
                    res_status='ok',
                    message = 'No data to retrieve!'
                )
            data = CertificatesMultipleOutSchema.model_validate({'Certificates':data})
            return  MessagingUtils.message_response(
                    status_code = status.HTTP_200_OK,
                    res_status='ok',
                    message = 'retrieved',
                data=jsonable_encoder(data.Certificates)
                )
        except Exception as e:
            raise e