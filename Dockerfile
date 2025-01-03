# Use an official Nginx image to serve your static files
FROM nginx:alpine

# Copy your project files into the container's web server root
COPY . /usr/share/nginx/html

# Expose the port that Nginx uses
EXPOSE 80

