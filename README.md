# KrutzJS

A URL shortener microservice written in Typescript using Fastify Web Framework and using Vue as frontend, little bit different than before, this project is written using principle of microservice architecture so the api, web and database is seperate docker instance so it can scale very easily.

## 🚀 Feature

- It can short some long uri

## 🖼️ Screenshot

![Untitled13](https://user-images.githubusercontent.com/68576836/192653554-0d9001f0-0631-4b98-a082-ab004a7c36ba.png)

![Untitled14](https://user-images.githubusercontent.com/68576836/192653561-4f0aee3b-93cd-490c-bbeb-c455df44740f.png)

![Untitled15](https://user-images.githubusercontent.com/68576836/192653564-19fcdccc-1146-4afd-8b8e-1d2c3a44e98c.png)

![Untitled16](https://user-images.githubusercontent.com/68576836/192653575-a64e483c-cd47-4cc7-8b28-5954db89bf70.png)

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
