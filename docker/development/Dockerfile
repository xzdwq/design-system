FROM node:18-alpine AS build-stage

RUN npm i -g pnpm

WORKDIR /design-system
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
COPY . .

ENV MODE="deploy"

RUN : \
  && pnpm fetch \
  && pnpm i -r --offline --frozen-lockfile \
  && pnpm build:storybook \
  && pnpm build:app \
  && pnpm prune --prod \
  ;

FROM nginx:stable-alpine as prod-stage

COPY --from=build-stage /design-system/dist-storybook /usr/share/nginx/html
COPY --from=build-stage /design-system/dist /usr/share/nginx/html/dist
COPY docker/development/nginx.conf /etc/nginx/

EXPOSE 6006/tcp

CMD ["nginx", "-g", "daemon off;"]
