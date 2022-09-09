import { FastifyInstance } from "fastify";
import dotenv from 'dotenv';
import AppBuilder from "./Builder/AppBuilder";

dotenv.config();

const server = new AppBuilder({ logger: true });
const port: number = Number.parseInt(process.env.APP_PORT as string) ?? 3000;
const host: string = process.env.APP_HOST ?? '0.0.0.0';

const app: FastifyInstance = server.build();
app.listen({ port: port, host: host });
