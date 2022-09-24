import fastify, { FastifyServerOptions, FastifyInstance } from 'fastify';
import Builder from '../Contracts/Builder';
import Route from '../Http/Route';
import cors from '@fastify/cors';
import fastifyRateLimit from '@fastify/rate-limit';

export default class FastifyBuilder implements Builder {
    private opts: FastifyServerOptions = {};
    private route: Route;

    constructor(opts: FastifyServerOptions = {}, route = new Route()) {
        this.opts = opts;
        this.route = route;
    }

    build(): FastifyInstance {
        const app: FastifyInstance = fastify(this.opts);

        this.registerPlugin(app);

        this.registerRoute(app);

        return app;
    }

    protected registerPlugin(app: FastifyInstance) {
        app.register(cors, {
            origin: process.env.WEB_URL ?? 'http://127.0.0.1:8000',
            methods: ['HEAD', 'GET', 'POST'],
        });

        app.register(fastifyRateLimit, {
            max: 10,
            global: true,
            timeWindow: '1 minute'
        });
    }

    protected registerRoute(app: FastifyInstance) {
        this.route.HEAD.forEach((value, key) => {
            const schema = value.schema;
            app.head(key, { schema }, value.action);
        });

        this.route.GET.forEach((value, key) => {
            const schema = value.schema;
            app.get(key, { schema }, value.action);
        });

        this.route.POST.forEach((value, key) => {
            const schema = value.schema;
            app.post(key, { schema }, value.action);
        });

        this.route.PUT.forEach((value, key) => {
            const schema = value.schema;
            app.put(key, { schema }, value.action);
        });

        this.route.PATCH.forEach((value, key) => {
            const schema = value.schema;
            app.patch(key, { schema }, value.action);
        });

        this.route.DELETE.forEach((value, key) => {
            const schema = value.schema;
            app.delete(key, { schema }, value.action);
        });
    }
}