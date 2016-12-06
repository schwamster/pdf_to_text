FROM node:4.6

RUN apt-get update && apt-get -y install imagemagick ghostscript poppler-utils && npm install -g typescript nodemon

RUN mkdir app
WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["node", "./server.js"]







