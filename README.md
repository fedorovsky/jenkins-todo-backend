
docker build -t test-backend .
docker run  -p 8000:8000 --rm --name test-backend test-backend

## delete all images:
docker rmi -f $(docker images -aq)