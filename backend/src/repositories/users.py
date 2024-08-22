import typing

from sqlalchemy import select

from models.users import Users
from schemas.users import UsersBaseDTO, UsersRegisterDTO

from utils.repository import SQLAlchemyRepository


class UsersRepository(SQLAlchemyRepository):
    model = Users

    async def get_one_by_username_or_email(
        self,
        user: UsersRegisterDTO,
    ) -> typing.Optional[UsersBaseDTO]:
        query = select(Users).where(
            Users.username == user.username,
            Users.email == user.email,
        )
        result = await self.session.execute(query)
        result = result.scalar_one_or_none()
        return result.to_schema() if result else None
