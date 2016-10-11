FROM node:4.6

RUN apt-get update && apt-get -y install poppler-utils && npm install -g typescript

RUN mkdir app
WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

RUN tsc

EXPOSE 3000

CMD ["node", "./server.js"]







