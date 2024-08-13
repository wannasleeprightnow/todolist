import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from middlewares import SecurityHeadersMiddleware
from routers import init_routers
from settings import settings


def create_app() -> FastAPI:

    logger = logging.getLogger(__name__)

    app = FastAPI(
        debug=True,
        title="project217",
        docs_url="/api/docs",
        openapi_url="/api/openapi.json",
    )

    init_routers(app)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOW_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    return app
