#base image
FROM alpine

#intall dependency
RUN apk add --update redis
RUN apk add --update gcc

# action of images
CMD ["redis-server"]