# Krutz-JS API

A RESTFUL Server written in Typescript using Fastify Library.

## 🛠️ Development

```bash
# make sure the repository cloned
# enter to api directory
> cd api

# install all dependency you can use npm if you want
> pnpm i

# copy enviroment variable and edit, DATABASE_URL is optional
> cp .env.example .env
> vim .env

# Make sure you have mysql running to run the Migration
> npx prisma migrate dev

# Run the development server
> pnpm run dev

```
