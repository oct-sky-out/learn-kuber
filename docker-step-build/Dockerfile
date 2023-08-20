FROM golang:1.12-alpine AS build

RUN apk update && apk upgrade && apk add --no-cache git nodejs bash npm

RUN go get -u github.com/jteeuwen/go-bindata/...

WORKDIR /go/src/github.com/kubernetes-up-and-running/kuard
RUN git clone https://github.com/kubernetes-up-and-running/kuard .

COPY . .
RUN npm update caniuse-lite browserslist

ENV VERBOSE=0
ENV PKG=github.com/kubernetes-up-and-running/kuard
ENV ARCH=amd64
ENV VERSION=test

RUN build/build.sh

FROM alpine

USER nobody:nobody
COPY --from=build /go/bin/kuard /kuard

CMD [ "/kuard" ]