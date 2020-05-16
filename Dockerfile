#base image
FROM node:alpine

#intall dependency
COPY ./ ./
RUN npm install

# action of images
CMD ["npm", "start"]