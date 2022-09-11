import { FastifyInstance, FastifyServerOptions } from "fastify";
import FastifyBuilder from "./Builder/FastifyBuilder";
import dotenv from 'dotenv';
import router from "./Router/Router";

/**
 * Bootstraping the Krutz Application
 */
export default class App {
    protected instance: FastifyInstance;
    protected port: number;
    protected host: string;

    constructor(opts: FastifyServerOptions = {}) {
        dotenv.config();

        const builder = new FastifyBuilder(opts, router);
        this.instance = builder.build();
        this.port = Number.parseInt(process.env.APP_PORT as string) ?? 3000;
        this.host = process.env.APP_HOST ?? '0.0.0.0';
    }

    /**
     * Listen to 127.0.0.1:3000 port
     * 
     * @return void
     */
    listen() {
        this.instance.listen({ port: this.port, host: this.host });
    }

    /**
     * Get the instance of Fastify Instance
     * 
     * @return FastifyInstance
     */
    getFastifyInstance(): FastifyInstance {
        return this.instance;
    }
}