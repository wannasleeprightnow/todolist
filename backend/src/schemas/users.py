from datetime import datetime
import re
import uuid

from pydantic import BaseModel, EmailStr, field_validator

from exceptions import InvalidUsername, InvalidPassword


class UsersBaseDTO(BaseModel):
    id: uuid.UUID
    email: EmailStr
    username: str
    created_at: datetime
    is_active: bool


class UsersRegisterDTO(BaseModel):
    email: EmailStr
    username: str
    password: str
    
    @field_validator("username")
    @classmethod
    def validate_login(cls, v):
        login_pattern = r"^[a-zA-Z0-9_]{6,}$"
        if not re.match(login_pattern, v):
            raise InvalidUsername
        return v

    @field_validator("password")
    @classmethod
    def validate_password(cls, v):
        password_pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,}$"
        if not re.match(password_pattern, v):
            raise InvalidPassword
        return v
