from fastapi import APIRouter, Depends

from mp_backend.dependencies.auth_dependencies import AuthDependencies
from mp_backend.schema.skills_schema import SkillsInSchema, TechsSchema
from mp_backend.services.skills_services import SkillsServices

skills_router = APIRouter(
    tags=['Skills'],
    prefix='/skills',
    dependencies=[Depends(AuthDependencies.get_current_user)]
)


@skills_router.post('/add')
async def add_skills(skills: SkillsInSchema):
    try:
        return await SkillsServices.add_skills(skills)
    except Exception as e:
        raise e


@skills_router.get('/all')
async def get_skills():
    try:
        return await SkillsServices.get_skills()
    except Exception as e:
        raise e


@skills_router.patch('/update/{skills_id}')
async def update_skills(skills_id: int, techs: TechsSchema):
    try:
        return await SkillsServices.update_skills(skills_id, techs)
    except Exception as e:
        raise e


@skills_router.delete('/delete/{skills_id}')
async def update_skills(skills_id: int):
    try:
        return await SkillsServices.delete_skills(skills_id)
    except Exception as e:
        raise e
