Docker Commands

docker run <image_name> <overide default command> = docker create <image_name> <command>  + docker start  <container id>
docker ps 	//running containers list
docker ps --all // all conatainer ran till now
docker system prune // delete all files of docker with cache
docker start -a <container id> // print out the output comes from the container also starts a stopped container.
docker logs <container_id>
docker stop <container_id> // 10s default wait
docker kill <container_id>
docker exec -it <container_id> <command>
docker exec -it <container_id> sh // to get terminal access;
docker run -it busybox sh // access the shell command while running
docker build -t <username/tag:version> <path-of-dockerfile-directory> // to build docker  file with tag
docker commit -c 'command' <imagename> // eg docker commit -c 'CMD ["redis-server"]' 1i9e3e932e
docker run -p <incoming-request-port>:<container-port> <image-id>

