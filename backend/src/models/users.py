import datetime
import typing
import uuid

from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, TIMESTAMP, UUID
from sqlalchemy.sql import func

from database.database import Base
from schemas.users import UsersBaseDTO

if typing.TYPE_CHECKING:
    from tasks import Tasks


class Users(Base):

    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(),
        primary_key=True,
        nullable=False,
        index=True,
        default=uuid.uuid4,
    )
    username: Mapped[str] = mapped_column(
        String(32),
        nullable=False,
    )
    password: Mapped[bytes]
    email: Mapped[str] = mapped_column(
        String(32),
        nullable=False,
    )
    created_at: Mapped[datetime.datetime] = mapped_column(
        TIMESTAMP(timezone=True),
        server_default=func.now(),
    )
    is_active: Mapped[bool] = mapped_column(default=True)
    tasks: Mapped[list["Tasks"]] = relationship(back_populates="user")

    def to_schema(self) -> UsersBaseDTO:
        return UsersBaseDTO(
            id=self.id,
            username=self.username,
            email=self.email,
            created_at=self.created_at,
            is_active=self.is_active,
        )
