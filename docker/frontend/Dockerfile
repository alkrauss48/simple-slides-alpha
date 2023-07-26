# Frontend Builder
FROM node:lts-alpine as node-builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN node_modules/.bin/vite build

# Final Image
FROM nginx:stable-alpine
WORKDIR /var/www/html

COPY ./docker/frontend/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node-builder --chown=82:82 /app/dist .
