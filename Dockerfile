FROM node:16-alpine AS node

# Builder Stage
FROM node AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

# Final Stage

FROM node as final

RUN mkdir -p /app/dist
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/app.js"]
