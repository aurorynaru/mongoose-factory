# Copy the pinned 32-bit runtime without executing it during the build.
FROM --platform=linux/386 ghcr.io/balintsoos/cs16-web-server@sha256:75a410e3406cbc525329df93216c740ca76d92d45b0da7e850ef762b4f106148 AS game

FROM golang:1.25-bookworm AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go test ./... && go vet ./... && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -o /gateway .

FROM debian:bookworm-slim
RUN dpkg --add-architecture i386 \
    && apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates libc6:i386 libgcc-s1:i386 libstdc++6:i386 libgomp1:i386 \
    && rm -rf /var/lib/apt/lists/* \
    && useradd --uid 10001 --user-group --home-dir /xashds FX_CS16
COPY --from=game --chown=10001:10001 /xashds /xashds
COPY --from=build /gateway /usr/local/bin/FX_CS16_backend
ENV PORT=8080 ICE_TCP_PORT=8443 XASH3D_BASEDIR=/xashds LD_LIBRARY_PATH=/xashds
WORKDIR /xashds
RUN /usr/local/bin/FX_CS16_backend -check-files
USER 10001:10001
EXPOSE 8080 8443
ENTRYPOINT ["/usr/local/bin/FX_CS16_backend"]
