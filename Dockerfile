FROM node:20.11.1-bullseye

USER root

RUN npm i -g npm@latest vercel@latest npm-check-updates
RUN apt-get update && apt-get -y install vim git

COPY ./src /home/node/calculator
RUN chown -R node:node /home/node/calculator

USER node
WORKDIR /home/node/calculator