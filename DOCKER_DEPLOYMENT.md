# Docker Deployment Guide

This guide explains how to build and deploy the application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Building the Docker Image

Build the production Docker image:

\`\`\`bash
docker build -t my-v0-app:latest .
\`\`\`

## Running the Container

### Basic Run

Run the container on port 3000:

\`\`\`bash
docker run -p 3000:3000 my-v0-app:latest
\`\`\`

### With Environment Variables

If your application requires environment variables, pass them using `-e` flag:

\`\`\`bash
docker run -p 3000:3000 \
  -e DATABASE_URL="your-database-url" \
  -e NEXT_PUBLIC_API_URL="your-api-url" \
  my-v0-app:latest
\`\`\`

### Using Environment File

Create a `.env.production` file with your environment variables and run:

\`\`\`bash
docker run -p 3000:3000 --env-file .env.production my-v0-app:latest
\`\`\`

## Docker Compose (Optional)

Create a `docker-compose.yml` file:

\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    # Or use env_file:
    # env_file:
    #   - .env.production
    restart: unless-stopped
\`\`\`

Then run:

\`\`\`bash
docker-compose up -d
\`\`\`

## Accessing the Application

Once the container is running, access the application at:
- http://localhost:3000

## Stopping the Container

Find the container ID:
\`\`\`bash
docker ps
\`\`\`

Stop the container:
\`\`\`bash
docker stop <container-id>
\`\`\`

Or with Docker Compose:
\`\`\`bash
docker-compose down
\`\`\`

## Production Considerations

1. **Environment Variables**: Ensure all required environment variables are set
2. **Port Mapping**: Adjust the port mapping if 3000 is already in use
3. **Health Checks**: Consider adding health check endpoints
4. **Logging**: Container logs can be viewed with `docker logs <container-id>`
5. **Security**: The container runs as a non-root user (nextjs) for security
6. **Volume Mounts**: If you need persistent data, add volume mounts

## Troubleshooting

### Build Fails
- Check that all dependencies in package.json are correct
- Ensure you have enough disk space
- Try clearing Docker cache: `docker builder prune`

### Container Won't Start
- Check logs: `docker logs <container-id>`
- Verify environment variables are set correctly
- Ensure port 3000 is not already in use

### Performance Issues
- Increase Docker memory allocation in Docker Desktop settings
- Consider using a reverse proxy like Nginx for production
