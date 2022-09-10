import fastify, { FastifyServerOptions, FastifyInstance } from 'fastify';
import Builder from '../Contracts/Builder';
import Route from '../Http/Route';
import RouteClosure from '../Types/RouteClosure';

export default class FastifyBuilder implements Builder {
    private opts: FastifyServerOptions = {};
    private route: Route;

    constructor(opts: FastifyServerOptions = {}, route: Route = new Route()) {
        this.opts = opts;
        this.route = route;
    }

    build(): FastifyInstance {
        const app: FastifyInstance = fastify(this.opts);

        this.registerRoute(app);

        return app;
    }

    protected registerRoute(app: FastifyInstance) {
        this.route.HEAD.forEach((value: RouteClosure, key) => {
            app.head(key, value);
        });

        this.route.GET.forEach((value: RouteClosure, key) => {
            app.get(key, value);
        });

        this.route.POST.forEach((value: RouteClosure, key: string) => {
            app.post(key, value);
        });

        this.route.PATCH.forEach((value: RouteClosure, key: string) => {
            app.patch(key, value);
        });

        this.route.PUT.forEach((value: RouteClosure, key: string) => {
            app.put(key, value);
        });

        this.route.DELETE.forEach((value: RouteClosure, key: string) => {
            app.delete(key, value);
        });
    }
}