FROM node

WORKDIR /app

COPY . .

RUN go build hello.go

EXPOSE 8080

CMD ["npx", "nodemon"]