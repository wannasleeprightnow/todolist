import time

from fastapi import APIRouter, Body, Depends, Request, Response

from api.v1.depends import UOWDepend
from schemas.users import UsersBaseDTO, UsersRegisterDTO
from services.users import UsersService


router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)


@router.post("/sign_up", status_code=201, response_model=UsersBaseDTO)
async def sign_up(
    uow: UOWDepend,
    user_data: UsersRegisterDTO,
):
    user = await UsersService().sign_up(user_data, uow)
    return user


@router.post("/gh")
async def hello(
):
    time.sleep(3)
    return "success"
