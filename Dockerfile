FROM docker.io/node:24.2.0-alpine3.22
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]
