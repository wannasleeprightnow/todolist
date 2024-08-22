import datetime
import enum
import typing
import uuid

from sqlalchemy import ForeignKey, String, TIMESTAMP, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from database.database import Base

if typing.TYPE_CHECKING:
    from users import Users


class TaskStatus(enum.StrEnum):
    planned: str = "Planned"
    in_progress: str = "In progress"
    done: str = "Done"


class Tasks(Base):

    __tablename__ = "tasks"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(),
        primary_key=True,
        nullable=False,
        index=True,
        default=uuid.uuid4,
    )
    number: Mapped[int] = mapped_column(
        nullable=False,
    )
    title: Mapped[str] = mapped_column(String(256), nullable=False)
    status: Mapped[TaskStatus]
    created_at: Mapped[datetime.datetime] = mapped_column(
        TIMESTAMP(timezone=True), server_default=func.now()
    )
    is_deleted: Mapped[bool] = mapped_column(default=False)
    user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE")
    )
    user: Mapped["Users"] = relationship(
        back_populates="tasks",
        foreign_keys=[user_id],
    )
