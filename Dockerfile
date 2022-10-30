FROM node:18

# Install pnpm
RUN ["npm", "i", "-g", "pnpm"]

# Copy app dir into docker container
COPY "." "/app"
WORKDIR "/app"

# Prepare packages
RUN ["pnpm", "i"]
RUN ["pnpm", "run", "--filter", "backend", "env-docker"]

# Build project
RUN ["pnpm", "build"]
RUN ["cp", "-r", "dist", "/frontend"]

# Serve project
CMD ["pnpm", "serve"]

EXPOSE 8080