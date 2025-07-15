# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install Mintlify CLI globally
RUN npm install -g mintlify

# Copy all documentation files
COPY . .

# Expose port 3000 (default Mintlify dev port)
EXPOSE 3000

# Command to run Mintlify dev server
CMD ["mintlify", "dev"]
