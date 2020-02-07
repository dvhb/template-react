FROM docker.dvhb.io/devops/iso/node:12.14.1

ARG SASS_PATH
ARG NODE_ENV
ARG REACT_APP_SENTRY_DSN
ARG REACT_APP_API_URL

RUN apk update --no-cache && apk upgrade && mkdir -p /opt/app && chown -R node:node /opt/app
WORKDIR /opt/app
USER node

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /opt/app/build /app
WORKDIR /app
EXPOSE 3000
COPY docker/nginx.conf /etc/nginx/nginx.conf
