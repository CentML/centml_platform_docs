# Use Node.js official image
FROM node:20-alpine

WORKDIR /app

# Create a non-root user
RUN addgroup -g 1001 centml && adduser -D -s /bin/sh -u 1001 -G centml centml

# Copy dependency files and install
COPY package.json ./
RUN npm install

# Copy all documentation files
COPY . .

# Change ownership of the app directory to centml user
RUN chown -R centml:centml /app

# Switch to non-root user
USER 1001:1001

# Expose Docusaurus dev port
EXPOSE 3000

# Start Docusaurus dev server bound to all interfaces
CMD ["npm", "start"]
