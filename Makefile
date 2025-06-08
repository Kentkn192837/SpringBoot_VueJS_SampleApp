build:
	docker-compose -f docker-compose.frontend.dev.yml up -d --build

up:
	docker-compose -f docker-compose.frontend.dev.yml up -d

shf:
	docker exec -it frontend /bin/bash
