# Stage 1: Build the application
FROM node:current-alpine AS builder

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Serve the application
FROM node:current-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/dist /app

# Expose the port the app runs on
EXPOSE 4173

# Command to run the app in preview mode
CMD ["pnpm", "preview", "--host", "0.0.0.0"]
