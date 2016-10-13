FROM node:4.6

RUN apt-get update && apt-get -y install imagemagick ghostscript poppler-utils && npm install -g typescript

RUN mkdir app
WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

RUN npm install -g nodemon

RUN tsc

EXPOSE 3000

CMD ["node", "./server.js"]







