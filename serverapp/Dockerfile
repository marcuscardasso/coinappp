FROM node:10
WORKDIR /app

RUN npm config set registry http://registry.npmjs.org/

RUN apt install npm@6.14.4

RUN npm --v

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .
ENV PORT 8001

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]