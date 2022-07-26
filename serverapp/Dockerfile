FROM node:16
WORKDIR /app
COPY package*.json ./

#RUN curl -v https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz
RUN npm install

COPY . .
ENV PORT 8080

EXPOSE $PORT
CMD [ "node", "dist/index.js" ]