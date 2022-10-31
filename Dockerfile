FROM node:alpine

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /usr/screen-culture-api

COPY package.json .
COPY yarn.lock .

RUN ["yarn"]

RUN ["yarn", "add", "-D", "@swc/cli", "@swc/core"]

COPY . .

RUN ["yarn", "build"]

EXPOSE ${PORT}

CMD ["yarn", "start"]
