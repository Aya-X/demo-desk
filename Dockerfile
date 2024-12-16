FROM node:22.12.0-alpine AS build

WORKDIR /app
COPY . /app

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm install
RUN pnpm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx","-g","daemon off;"]