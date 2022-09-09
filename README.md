# KrutzJS

A URL shortener microservice written in Typescript using Fastify Web Framework, little bit different than before, this project is written using principle of microservice architecture so the api and database is seperate docker instance so it can scale very easily.

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

For those who doesn't have Docker installed, make sure you have mysql installed.

```bash
# Set the enviroment variable and uncomment DATABASE_URL
> cp .env.example .env
> vim .env

# Run the development server
> pnpm run dev
```