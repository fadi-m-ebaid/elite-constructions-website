# Stage_01
# Specify the base image for the container
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy rest of the application code to the container
COPY . .

# Build the Next.js app it exports the build as the output configered in next.config.ts file.
RUN npm run build


#--------------------------------------

# Stage_02
# A very small image
FROM nginx:alpine

# Copy only the static files from the builder stege
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port
EXPOSE 80

# Command to start the application
CMD ["npm", "run", "dev"]



