# Build stage for React
FROM node:22.12.0-alpine AS build-react
WORKDIR /app
COPY . /app
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install
RUN pnpm run build

# Build Nginx with Brotli
FROM alpine:3.18 AS build-nginx

# Install build dependencies
RUN apk add --no-cache \
    gcc \
    libc-dev \
    make \
    openssl-dev \
    pcre-dev \
    zlib-dev \
    linux-headers \
    libxslt-dev \
    gd-dev \
    geoip-dev \
    perl-dev \
    libedit-dev \
    mercurial \
    bash \
    alpine-sdk \
    findutils \
    git \
    brotli-dev

WORKDIR /usr/local/src

# Download and compile brotli
RUN git clone --recursive https://github.com/google/ngx_brotli.git

# Download and extract Nginx
RUN wget https://nginx.org/download/nginx-1.22.1.tar.gz && \
    tar -zxf nginx-1.22.1.tar.gz

# Configure and build Nginx with Brotli
WORKDIR /usr/local/src/nginx-1.22.1
RUN ./configure \
    --prefix=/etc/nginx \
    --sbin-path=/usr/sbin/nginx \
    --modules-path=/usr/lib/nginx/modules \
    --conf-path=/etc/nginx/nginx.conf \
    --error-log-path=/var/log/nginx/error.log \
    --pid-path=/var/run/nginx.pid \
    --lock-path=/var/run/nginx.lock \
    --user=nginx \
    --group=nginx \
    --with-threads \
    --with-http_ssl_module \
    --with-http_v2_module \
    --with-http_realip_module \
    --with-http_addition_module \
    --with-http_gzip_static_module \
    --add-module=/usr/local/src/ngx_brotli \
    && make \
    && make install

# Final stage
FROM alpine:3.18

# Create nginx user/group first
RUN addgroup -g 101 -S nginx \
    && adduser -S -D -H -u 101 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx

# Install runtime dependencies
RUN apk add --no-cache \
    ca-certificates \
    pcre \
    openssl \
    brotli \
    brotli-libs

# Copy nginx build from build-nginx stage
COPY --from=build-nginx /etc/nginx /etc/nginx
COPY --from=build-nginx /usr/sbin/nginx /usr/sbin/nginx

# Create required directories and set permissions
RUN mkdir -p /usr/share/nginx/html /var/cache/nginx /var/log/nginx \
    && ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

# Copy React static files
COPY --from=build-react /app/dist /usr/share/nginx/html

# Copy nginx configuration files
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]