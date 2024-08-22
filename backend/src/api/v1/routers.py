from fastapi import APIRouter

from settings import settings
from api.v1.auth import router as auth_router
from api.v1.tasks import router as tasks_router
from api.v1.users import router as users_router

api_v1_root_router = APIRouter(
    prefix=settings.API_V1_PREFIX,
)

api_v1_root_router.include_router(auth_router)
api_v1_root_router.include_router(tasks_router)
api_v1_root_router.include_router(users_router)
