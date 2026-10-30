FROM golang:1.25-bookworm AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go test ./... && CGO_ENABLED=0 go build -trimpath -o /probe .

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /probe /probe
ENV PORT=8080 ICE_TCP_PORT=8443
EXPOSE 8080 8443
ENTRYPOINT ["/probe"]
