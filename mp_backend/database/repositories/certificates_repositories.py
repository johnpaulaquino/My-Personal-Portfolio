from sqlalchemy import select

from mp_backend.database.engine import create_session
from mp_backend.database.models import Certificates


class CertificatesRepositories:

    @staticmethod
    async def add_certificate(certificates: Certificates):
        async with create_session() as db:
            try:
                db.add(certificates)
                await db.commit()
            except Exception as e:
                await db.rollback()
                raise e

    @staticmethod
    async def add_multiple_certificates(certificates: Certificates):
        async with create_session() as db:
            try:
                db.add_all(certificates)
                await db.commit()
            except Exception as e:
                await db.rollback()
                raise e

    @staticmethod
    async def get_cert_by_cred_id(cred_id : str):
        async with create_session() as db:
            try:
                stmt = (select(Certificates)
                        .where(Certificates.cred_id == cred_id))

                result = await db.execute(stmt)
                data = result.scalar()
                if not data:
                    return False
                return True
            except Exception as e:
                raise e

    @staticmethod
    async def get_four_records():
        async with create_session() as db:
            try:
                result = await db.execute(select(Certificates).limit(4))
                data = result.scalars().all()
                return data
            except Exception as e:
                raise e