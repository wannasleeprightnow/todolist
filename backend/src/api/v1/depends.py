from typing import Annotated

from fastapi import Depends

from utils.unitofwork import AbstractUnitOfWork, UnitOfWork


UOWDepend = Annotated[AbstractUnitOfWork, Depends(UnitOfWork)]
