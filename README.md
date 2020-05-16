# dev-ops
docker run <image_name> = docker create <image_name> + docker start <container id> <BR>
docker ps //running containers list <BR>
docker ps --all // all container ran till now <BR>
docker system prune // delete all files of docker with cache <BR>
docker start -a // print out the output comes from the container also starts a stopped container. <BR>
docker logs <container_id> docker stop <container_id> // 10s default wait <BR>
docker kill <container_id> docker exec -it <container_id> <BR>
docker exec -it <container_id> sh // to get terminal access <BR>
docker run -it busybox sh docker build -t <username/tag:version> // to build docker file with tag <BR>
docker commit -c 'command' // eg docker commit -c 'CMD ["redis-server"]' 1i9e3e932e <BR>
docker run -p <incoming_request_port>:<container_port> <image_id> <BR>
