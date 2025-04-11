FROM node:23-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install -g http-server

COPY ./website .

EXPOSE 3000

CMD ["http-server", "-p", "3000"]
