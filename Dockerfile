FROM node

RUN apt-get update && apt-get -y install poppler-utils

RUN mkdir app

COPY . /app

EXPOSE 8888
WORKDIR /app







