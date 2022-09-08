import fastify, { FastifyServerOptions, FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import Builder from '../Contracts/Builder';

export default class AppBuilder implements Builder {
    private opts: FastifyServerOptions = {};

    constructor(opts: FastifyServerOptions = {}) {
        // Todo pass the route to this method
        this.opts = opts;
    }

    build(): FastifyInstance {
        const app: FastifyInstance = fastify(this.opts);

        // Todo : Make the route can be registered via constructor

        app.get('/', async function (request: FastifyRequest, reply: FastifyReply) {
            reply.send({ "message": "Hello, World" });
        });

        return app;
    }
}