from fastapi import APIRouter

from settings import settings

api_v1_root_router = APIRouter(
    prefix=settings.API_V1_PREFIX,
)


@api_v1_root_router.get("/")
async def get_index() -> dict[str, str]:
    return {"message": "Hello World!"}
