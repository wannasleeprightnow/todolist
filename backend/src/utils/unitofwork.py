from abc import ABC, abstractmethod
from typing import Any, Callable, Type

from sqlalchemy.ext.asyncio import AsyncSession

from database.database import async_session_maker
from repositories.users import UsersRepository


class AbstractUnitOfWork(ABC):

    @abstractmethod
    def __init__(self) -> None:
        raise NotImplementedError

    @abstractmethod
    async def __aenter__(self) -> None:
        raise NotImplementedError

    @abstractmethod
    async def __aexit__(self, *args: tuple[Any]) -> None:
        raise NotImplementedError

    @abstractmethod
    async def commit(self) -> None:
        raise NotImplementedError

    @abstractmethod
    async def rollback(self) -> None:
        raise NotImplementedError


class UnitOfWork(AbstractUnitOfWork):
    users: Type[UsersRepository]

    def __init__(self) -> None:
        self._session_factory = async_session_maker

    async def __aenter__(self) -> None:
        self._session = self._session_factory()

        self.users = UsersRepository(self._session)

    async def __aexit__(self, *args: tuple[Any]) -> None:
        await self.rollback()
        await self._session.close()

    async def commit(self) -> None:
        await self._session.commit()

    async def rollback(self) -> None:
        await self._session.rollback()
