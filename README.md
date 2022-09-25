# KrutzJS

A URL shortener microservice written in Typescript using Fastify Web Framework and using Vue as frontend, little bit different than before, this project is written using principle of microservice architecture so the api, web and database is seperate docker instance so it can scale very easily.

## 🚀 Feature

- It can short some long uri

## 🛠️ Development
```bash
# Clone the repository
> git clone "https://github.com/UnknownRori/krutz-js"
> cd krutz-js

# Set up enviroment variable
> cp .env.example .env
> vim .env

# Install dependency
> pnpm i

# Roll the Docker Container
> docker-compose up
```

For those who doesn't have Docker installed, you can read individual component's readme for instruction.

## ⭐ Contribution

Feel free to send a pull request or creating an issue.