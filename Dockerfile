#FROM busybox:glibc
FROM ubuntu:24.04

COPY backend-axum /usr/local/bin/

# for ssl access? -- how to do in busybox?
# RUN apt-get update \
#     && apt-get install -y ca-certificates \
#     && rm -rf /var/lib/apt/lists/*

CMD ["backend-axum"]
