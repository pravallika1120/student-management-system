# Base Image
FROM node:22

# Working Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose Vite Port
EXPOSE 5173

# Start React App
CMD ["npm", "run", "dev", "--", "--host"]