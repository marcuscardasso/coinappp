FROM node:12.18.1
WORKDIR /app
#COPY package*.json ./

#RUN curl -v https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz
COPY package.json package.json

RUN npm install --omit=dev

#RUN npm install

COPY . .
ENV PORT 8080

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]