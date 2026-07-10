# Use Microsoft's official Playwright image
FROM mcr.microsoft.com/playwright:v1.59.1-noble
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npx", "playwright", "test"]