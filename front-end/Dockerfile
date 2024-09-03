FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json tsconfig*.json angular.json ./

RUN npm install

COPY /src /usr/src/app/src

CMD ["npm", "start"]