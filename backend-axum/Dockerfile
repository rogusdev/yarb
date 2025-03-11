# https://hub.docker.com/_/rust
FROM rust:1.85.0 as build

WORKDIR /usr/src/backend-axum

COPY Cargo.toml Cargo.lock ./
RUN mkdir src/ \
    && echo "fn main() {println!(\"if you see this, the build broke\")}" > src/main.rs \
    && cargo build --release \
    && rm src/*.rs

COPY . .
RUN rm target/release/deps/backend_axum* \
    && cargo build --release

# https://releases.ubuntu.com/
# https://hub.docker.com/_/ubuntu
FROM ubuntu:jammy
COPY --from=build /usr/src/backend-axum/target/release/backend-axum /usr/local/bin/

# for ssl access?
RUN apt-get update \
    && apt-get install -y ca-certificates \
    && rm -rf /var/lib/apt/lists/*

CMD ["backend-axum"]
