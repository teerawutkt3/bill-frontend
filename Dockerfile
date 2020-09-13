# Dockerfile
FROM node:lts-alpine

# create destination directory
RUN mkdir -p /usr/src/bill-frontend
WORKDIR /usr/src/bill-frontend
# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/bill-frontend/


RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]