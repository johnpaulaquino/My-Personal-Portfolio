from datetime import date
from typing import List

from pydantic import BaseModel



class CertificatesInSchema(BaseModel):
    title: str
    provider: str
    date_issued : date
    cred_id: str

class CertificatesOutSchema(CertificatesInSchema):
    id : int

    class Config:
        from_attributes = True
class CertificatesMultipleOutSchema(BaseModel):
    Certificates : list[CertificatesOutSchema]

    class Config:
        from_attributes = True