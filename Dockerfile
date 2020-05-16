#base image
FROM node:alpine
WORKDIR /usr/app

#intall dependency
COPY ./package.json ./
RUN npm install
COPY ./ ./

# action of images
CMD ["npm", "start"]
