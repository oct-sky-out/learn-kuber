FROM node:lts-hydrogen

WORKDIR /usr/home/ubuntu

COPY package*.json ./
RUN npm i

COPY . .

CMD [ "npm", "start" ]