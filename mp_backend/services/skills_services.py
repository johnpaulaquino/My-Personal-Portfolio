from dns.opcode import is_update
from fastapi.encoders import jsonable_encoder
from fastapi import status
from sqlalchemy.testing import db

from mp_backend.database.engine import create_session
from mp_backend.database.models import Skills
from mp_backend.database.repositories.skills_repositories import SkillsRepositories
from mp_backend.schema.skills_schema import SkillsInSchema, SkillsOutSchema, TechsSchema
from mp_backend.utils.messaging_utils import MessagingUtils


class SkillsServices:

    @staticmethod
    async def add_skills(skill: SkillsInSchema):
        try:
            skills = Skills(
                techs=jsonable_encoder(skill.techs))
            await SkillsRepositories.add_skills(skills)
            return MessagingUtils.message_response(
                status_code=status.HTTP_201_CREATED,
                res_status='ok',
                message='successfully created'
            )
        except Exception as e:
            raise e

    @staticmethod
    async def get_skills():
        try:
            data = await SkillsRepositories.get_skills()
            if not data:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_200_OK,
                    res_status='ok',
                    message='No data to fetch!'
                )
            data = SkillsOutSchema.model_validate(data)

            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                res_status='ok',
                message='retrieved!',
                data=jsonable_encoder(data)
            )
        except Exception as e:
            raise e

    @staticmethod
    async def update_skills(skills_id: int, techs: TechsSchema):
        try:
            is_exist = await SkillsRepositories.find_skills_by_id(skills_id)
            if not is_exist:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    res_status='failed',
                    message='skills is not exist!'
                )

            await SkillsRepositories.update_skills(skills_id, jsonable_encoder(techs))
            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                res_status='ok',
                message='successfully updated!'
            )
        except Exception as e:
            raise e

    @staticmethod
    async def delete_skills(skills_id: int):
        try:
            is_exist = await SkillsRepositories.find_skills_by_id(skills_id)
            if not is_exist:
                return MessagingUtils.message_response(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    res_status='failed',
                    message='skills is not exist!'
                )
            await SkillsRepositories.delete_skills(skills_id)
            return MessagingUtils.message_response(
                status_code=status.HTTP_200_OK,
                res_status='ok',
                message='successfully deleted!'
            )
        except Exception as e:
            raise e
