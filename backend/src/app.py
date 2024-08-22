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
        allow_origins=[
            "http://localhost:5173",
            "http://172.21.0.5",
            "http://172.21.0.4:5173/",
            "http://frontend_app",
        ],
        allow_credentials=True,
        allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
        allow_headers=["Accept", "Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                   "Authorization"],
    )
    return app
