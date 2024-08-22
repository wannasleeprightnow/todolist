from typing import Any, Dict
from typing_extensions import Annotated, Doc
from fastapi import HTTPException, status


class UserAlreadyExists(HTTPException):
    def __init__(self) -> None:
        super().__init__(
      		status_code=status.HTTP_409_CONFLICT,
        	detail="User already exists",
      )


class InvalidUsername(HTTPException):
    def __init__(self) -> None:
        super().__init__(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Username can contain uppercase and lowercase letters, numbers and underscores",
      )


class InvalidPassword(HTTPException):
    def __init__(self) -> None:
        super().__init__(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Password must be at least 8 characters long and include uppercase, lowercase,  numbers and special sign.",
      )