import bcrypt


def password_hashing(password: str) -> bytes:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())
