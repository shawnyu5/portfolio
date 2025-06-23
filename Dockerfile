FROM docker.io/node:24.2.0-alpine3.22 AS builder
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]

# Stage 2: Serve with Nginx
FROM docker.io/nginx:stable-alpine3.21

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app to Nginx public folder
COPY --from=builder /app/dist/portfolio /usr/share/nginx/html

# Copy custom nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

