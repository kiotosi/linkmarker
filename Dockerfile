FROM node:18

# Install pnpm
RUN ["npm", "i", "-g", "pnpm"]

# Copy app dir into docker container
COPY "." "/app"
WORKDIR "/app"

# Prepare packages
RUN ["pnpm", "i"]
RUN ["pnpm", "run", "--filter", "backend", "env:docker"]

# Build project
RUN ["pnpm", "build"]
RUN ["cp", "-r", "apps/frontend/dist", "/frontend"]

# Change directory to backend
WORKDIR "/app/apps/backend"

# Serve project
EXPOSE 8080
CMD ["pnpm", "serve"]
