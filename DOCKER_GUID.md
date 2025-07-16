# Docker Commands Reference

## Most Common Docker Commands

### Building and Running

```bash
# Build the production image
docker build -t klh-frontend .

# Build development image
docker build -t klh-frontend-dev -f Dockerfile.dev .

# Run production container
docker run -p 3000:3000 --env-file .env klh-frontend

# Run development container
docker run -p 3001:3000 --env-file .env.dev -v $(pwd):/app klh-frontend-dev
```

### Docker Compose Commands

```bash
# Start production environment
docker-compose up app

# Start development environment
docker-compose up app-dev

# Start in detached mode (background)
docker-compose up -d app

# Stop containers
docker-compose down

# Rebuild and start
docker-compose up --build app

# View logs
docker-compose logs app
docker-compose logs -f app  # Follow logs

# Execute commands in running container
docker-compose exec app sh
```

### Container Management

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop <container_id>

# Remove a container
docker rm <container_id>

# Remove all stopped containers
docker container prune
```

### Image Management

```bash
# List images
docker images

# Remove an image
docker rmi <image_id>

# Remove unused images
docker image prune

# Remove all unused images (including tagged)
docker image prune -a
```

### Development Workflow

```bash
# Quick development start
docker-compose up app-dev

# Rebuild after dependency changes
docker-compose up --build app-dev

# Check container logs
docker-compose logs -f app-dev

# Execute commands in dev container
docker-compose exec app-dev npm run lint
docker-compose exec app-dev npm run format
```

### Production Deployment

```bash
# Build production image
docker build -t klh-frontend:latest .

# Tag for registry
docker tag klh-frontend:latest your-registry/klh-frontend:latest

# Push to registry
docker push your-registry/klh-frontend:latest

# Run production container
docker run -d -p 3000:3000 --env-file .env --name klh-frontend-prod klh-frontend:latest
```

### Debugging Commands

```bash
# Enter running container
docker exec -it <container_id> sh

# Check container resource usage
docker stats

# Inspect container configuration
docker inspect <container_id>

# View container processes
docker top <container_id>
```

### Cleanup Commands

```bash
# Remove all stopped containers, unused networks, dangling images
docker system prune

# Remove everything including unused images
docker system prune -a

# Remove unused volumes
docker volume prune

# Remove unused networks
docker network prune
```

## Environment Setup

1. Create your environment files:
   - `.env.production.local` for production
   - `.env.development.local` for development

2. Copy from `.env.production` & `.env.development` and fill in your values

3. Never commit actual environment files to git

## Quick Start Guide

1. **Setup environment files**:
   ```bash
   cp .env.production .env.production.local
   cp .env.development .env.development.local
   # Edit both files with your values
   ```

2. **Development**:
   ```bash
   docker-compose up app-dev
   ```

3. **Production**:
   ```bash
   docker-compose up app
   ```

4. **Stop everything**:
   ```bash
   docker-compose down
   ```