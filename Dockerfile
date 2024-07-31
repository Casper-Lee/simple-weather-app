# Stage 1: Build the application
FROM --platform=arm64 node:20.11.1-alpine3.19 AS builder
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

FROM --platform=linux/amd64 node:20.11.1-alpine3.19 AS final

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

CMD ["npm", "start"]
