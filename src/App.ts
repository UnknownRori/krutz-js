import { FastifyInstance, FastifyServerOptions } from "fastify";
import FastifyBuilder from "./Builder/FastifyBuilder";
import dotenv from 'dotenv';
import router from "./Router/Router";

export default class App {
    protected instance: FastifyInstance;
    protected port: number;
    protected host: string;

    constructor(opts: FastifyServerOptions) {
        dotenv.config();

        const builder = new FastifyBuilder(opts, router);
        this.instance = builder.build();
        this.port = Number.parseInt(process.env.APP_PORT as string) ?? 3000;
        this.host = process.env.APP_HOST ?? '0.0.0.0';
    }

    listen() {
        this.instance.listen({ port: this.port, host: this.host });
    }

    getFastifyInstance(): FastifyInstance {
        return this.instance;
    }
}