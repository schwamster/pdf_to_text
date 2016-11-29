FROM node:4.6

RUN apt-get update && apt-get -y install imagemagick ghostscript poppler-utils && npm install -g typescript

RUN mkdir app
WORKDIR /app
COPY package.json /app


RUN npm install --dev && npm install

COPY . /app

RUN npm install -g nodemon typings

RUN typings install && tsc

EXPOSE 3000

CMD ["node", "./server.js"]







