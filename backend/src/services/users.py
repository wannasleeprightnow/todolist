from exceptions import UserAlreadyExists
from schemas.users import UsersRegisterDTO, UsersBaseDTO
from utils.auth import password_hashing
from utils.unitofwork import UnitOfWork


class UsersService:

    async def sign_up(
        self,
        user_data: UsersRegisterDTO,
        uow: UnitOfWork,
    ) -> UsersBaseDTO:
        async with uow:
            if await uow.users.get_one_by_username_or_email(user_data):
                raise UserAlreadyExists

            user_data = user_data.model_dump()
            user_data["password"] = password_hashing(user_data["password"])
            user = await uow.users.insert_one(user_data)
            await uow.commit()
        return user
