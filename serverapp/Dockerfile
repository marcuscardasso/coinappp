FROM node:13.12.0-alpine
WORKDIR /app
COPY package*.json ./

RUN npm cache clean --force
RUN npm install

COPY . .
ENV PORT 8080

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]