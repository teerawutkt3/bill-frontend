# Dockerfile
FROM node:10.15.0 as build-stage
WORKDIR /home/app
# ENV PATH /home/app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install -g @vue/cli
COPY . /home/app

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]