# syntax=docker/dockerfile:1
# ^ Use the latest stable Dockerfile frontend (needed for RUN --mount below).

# Template: multi-stage image for this Docusaurus site.
# Stage 1 builds static files with Node; stage 2 serves them with nginx, so the
# final image contains no Node.js, no node_modules and no source code.
#
# Build from the repository root (the build context must contain package.json):
#   docker build -f templates/Dockerfile -t cicd-docs .
#   docker run --rm -p 8080:80 cicd-docs

# ---- Stage 1: build ---------------------------------------------------------
# Match the Node major in .nvmrc. For fully reproducible builds, pin a digest:
#   FROM node:22-alpine@sha256:<digest> AS build
FROM node:26-alpine AS build

WORKDIR /app

# Copy only the manifests first. This layer (and the npm ci below) is reused
# from cache until package.json or package-lock.json changes, so editing docs
# does not reinstall dependencies.
COPY package.json package-lock.json ./

# Cache mount: keeps npm's download cache between builds without storing it
# in the image layer.
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Now copy the rest of the source. Paths in Dockerfile.dockerignore
# (node_modules, build, .git, ...) are excluded from the build context.
COPY . .

RUN npm run build

# ---- Stage 2: serve ---------------------------------------------------------
FROM nginx:1.30-alpine AS runtime

# Custom server block: Docusaurus 404 page and long-lived caching for hashed assets.
COPY templates/nginx.conf /etc/nginx/conf.d/default.conf

# Only the static output is copied from the build stage.
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Lets `docker ps` and orchestrators see whether nginx is actually serving.
# busybox wget is available in the alpine image; curl is not installed.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
