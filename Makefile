DC = sudo docker compose
BACKEND_APP_FILE = backend/docker_compose/backend_app.yaml
POSTGRES_FILE = backend/docker_compose/postgres.yaml
NGINX_FILE = backend/docker_compose/nginx.yaml

all:

restart_all: drop_all start_all

start_all:
	$(DC) up --build -d

drop_all:
	$(DC) down

logs_all:
	$(DC) logs -f

# start_all: start_postgres start_backend_app start_nginx

# drop_all: drop_postgres drop_backend_app drop_nginx

start_backend_app:
	$(DC) -f $(BACKEND_APP_FILE) up --build -d

drop_backend_app:
	$(DC) -f $(BACKEND_APP_FILE) down

start_postgres:
	$(DC) -f $(POSTGRES_FILE) up --build -d

drop_postgres:
	$(DC) -f $(POSTGRES_FILE) down

start_nginx:
	$(DC) -f $(NGINX_FILE) up --build -d

drop_nginx:
	$(DC) -f $(NGINX_FILE) down

# logs_all: 
# 	$(DC) -f $(BACKEND_APP_FILE) -f $(POSTGRES_FILE) -f $(NGINX_FILE) logs -f

logs_backend_app:
	$(DC) -f $(BACKEND_APP_FILE) logs -f

logs_postgres:
	$(DC) -f $(POSTGRES_FILE) logs -f

logs_nginx:
	$(DC) -f $(NGINX_FILE) logs -f

lint_backend_app:
	black  --config .black backend/src/
	flake8 --verbose --enable-extensions=flake8-bugbear,flake8-simplify,flake8-async,flake8-unused-arguments,flake8-commas,flake8-comprehensions,flake8-quotes,flake8-builtins,pep8-naming,flake8-functions,flake8-alphabetize,flake8-import-order,flake8-annotations-coverage --config backend/.flake8 backend/src/
	mypy  --config-file ./backend/.mypy.ini backend/src/
