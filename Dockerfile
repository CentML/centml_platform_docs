# Use Node.js official image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Mintlify CLI (pinned to a verified working version)
RUN npm install -g mint@4.2.516

# Create a user and group with specific UID and GID so kubernetes knows
# it's not a root user. Alpine images ship with /bin/sh by default.
RUN addgroup -g 1001 centml && adduser -D -s /bin/sh -u 1001 -G centml centml

# Copy all documentation files
COPY . .

# Change ownership of the app directory to centml user
RUN chown -R centml:centml /app

# Switch to non-root user
USER 1001:1001

# Expose port 3000 (default Mintlify dev port)
EXPOSE 3000

# Command to run Mintlify dev server
CMD ["mint", "dev"]
