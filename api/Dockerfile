FROM node:24-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

RUN chown -R node:node /app
USER node

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
