FROM golang:alpine AS golangapp

WORKDIR /app

COPY main.go main.go

RUN go build -o codeeducation *.go 

ENTRYPOINT [ "./codeeducation" ]