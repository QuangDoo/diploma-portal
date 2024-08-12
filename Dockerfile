FROM node:current-alpine

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g pnpm
COPY . .
RUN pnpm install
RUN pnpm run build

EXPOSE 4173
CMD ["pnpm", "preview", "--host", "0.0.0.0"]
