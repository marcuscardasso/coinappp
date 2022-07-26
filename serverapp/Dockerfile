FROM node:12.18.1
WORKDIR /app
#COPY package*.json ./

#RUN curl -v https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz
COPY src/package.json package.json
COPY src/npm-shrinkwrap.json npm-shrinkwrap.json

RUN npm install --omit=dev

#RUN npm install

COPY . .
ENV PORT 8080

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]