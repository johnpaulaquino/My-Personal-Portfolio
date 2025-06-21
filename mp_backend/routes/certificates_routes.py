from fastapi import APIRouter
from sqlalchemy.testing.plugin.plugin_base import pre

from mp_backend.schema.certificates_schema import CertificatesInSchema
from mp_backend.services.certificates_services import CertificatesServices

certificates_router = APIRouter(
    prefix='/certificates'
)


@certificates_router.post('/add')
async def add_certificates(cert : CertificatesInSchema):
    try:
        return await CertificatesServices.add_certificate(cert)
    except Exception as e:
        raise e

@certificates_router.post('/four_records')
async def add_certificates():
    try:
        return await CertificatesServices.get_four_records()
    except Exception as e:
        raise e
