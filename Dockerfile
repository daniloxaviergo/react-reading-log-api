FROM node:16.1.0-buster-slim

WORKDIR /app
COPY . .

ENV NODE_VERSION=16.1.0

RUN apt update \
    && apt install -y --no-install-recommends \
      ca-certificates wget

RUN npm i \
    && chown -R node:node /app

USER node

CMD ["npm", "run", "start"]
