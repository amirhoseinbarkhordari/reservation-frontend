git checkout develop
git pull origin develop
docker build reservation-frontend:latest .
docker-compose down
docker-compose up -d
