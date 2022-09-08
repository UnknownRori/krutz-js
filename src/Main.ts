import { FastifyInstance } from "fastify";
import AppBuilder from "./Builder/AppBuilder";

const server = new AppBuilder({ logger: true });

const app: FastifyInstance = server.build();
app.listen({ port: 3000 });
