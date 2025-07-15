# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install Mintlify CLI globally
RUN npm install -g mintlify

# Create a user and group with specific UID and GID so kubernetes knows
# it's not a root user
RUN addgroup -g 1001 centml && adduser -D -s /bin/bash -u 1001 -G centml centml

# Copy all documentation files
COPY . .

# Change ownership of the app directory to centml user
RUN chown -R centml:centml /app

# Switch to non-root user
USER 1001:1001

# Expose port 3000 (default Mintlify dev port)
EXPOSE 3000

# Command to run Mintlify dev server
CMD ["mintlify", "dev"]
