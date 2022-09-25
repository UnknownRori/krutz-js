import { FastifyInstance, FastifyServerOptions } from "fastify";
import FastifyBuilder from "./Builder/FastifyBuilder";
import router from "./Router/Router";
import env from "./Services/Enviroment";

/**
 * Bootstraping the Krutz Application
 */
export default class App {
    protected instance: FastifyInstance;
    protected port: number;
    protected host: string;

    /**
     * Create Krutz Application
     * 
     * @param  opts FastifyServerOptions
     * @return App
     */
    constructor(opts: FastifyServerOptions = {}) {
        const builder = new FastifyBuilder(opts, router);
        this.instance = builder.build();

        this.host = env.APP_HOST;
        this.port = env.APP_PORT;
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