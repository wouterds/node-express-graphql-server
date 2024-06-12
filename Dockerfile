FROM node:18-alpine AS base
WORKDIR /code

ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA

RUN apk update
RUN apk add --no-cache libc6-compat dumb-init

FROM base AS build

COPY ./ ./
RUN npm install

WORKDIR /code
USER node
EXPOSE 4000

CMD dumb-init npm run dev
