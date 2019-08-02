FROM node:10.15-alpine
WORKDIR /app
ADD . /app

ENV DB_TYPE="mysql"
ENV MYSQL_DB_USER="root"
ENV MYSQL_DB_PASSWORD="my-secret-pw"
ENV MYSQL_DB_HOST="some-mysql"
ENV MYSQL_SCHEMA="dummy"
ENV NODE_ENV="development"
# ENV HOST_PREFIX="/node-demo1"

RUN npm install
EXPOSE 3000
CMD npm start