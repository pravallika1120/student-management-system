# Base Image
FROM node:18

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

# Backend Port
EXPOSE 5000

# Start server
CMD ["npm", "start"]