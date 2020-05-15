FROM node:current-slim

WORKDIR /home/node/app

# copy test application
COPY package.json package-lock.json ./
COPY app ./app
COPY serve.json ./

RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]
