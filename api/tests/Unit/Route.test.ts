import { FastifyReply, FastifyRequest } from "fastify";
import Route from "../../src/Http/Route";

async function routeFunc(request: FastifyRequest, reply: FastifyReply) {
    reply.send({ "message": "Pong!" });
}

describe("Testing the Route class", () => {
    let route: Route;

    beforeEach(() => {
        route = new Route();
    });


    test('Create Route instance', () => {
        expect(route).toBeInstanceOf(Route);
    });

    test('It can create HTTP Route HEAD', () => {
        route.head('/', routeFunc);

        expect(route.HEAD.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route GET', () => {
        route.get('/', routeFunc);

        expect(route.GET.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route POST', () => {
        route.post('/', routeFunc);

        expect(route.POST.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route PUT', () => {
        route.put('/', routeFunc);

        expect(route.PUT.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route PATCH', () => {
        route.patch('/', routeFunc);

        expect(route.PATCH.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route DELETE', () => {
        route.delete('/', routeFunc);

        expect(route.DELETE.has('/')).toBeTruthy();
    });

    test('It can give Route a name', () => {
        route.get('/', routeFunc).name('home');
        route.get('/contacts', routeFunc).name('contacts');
        route.get('/privacy', routeFunc).name('privacy');

        expect(route.getRoute('home')).toEqual('/');
        expect(route.getRoute('contacts')).toEqual('/contacts');
        expect(route.getRoute('privacy')).toEqual('/privacy');
    });

    test('It can give Route a schema', () => {
        const schema = {
            body: {
                type: 'object',
                required: ['key'],
                properties: {
                    key: { type: 'string' }
                }
            }
        };

        route.post('/', routeFunc).schema(schema);

        expect(route.POST.get('/')?.schema).toBe(schema);
    });

    test('It can generate a route', () => {
        route.get('/test/:test', routeFunc).name('test');

        expect(route.getRoute('test', { test: '1' })).toBe('/test/1');
    });

    test('It can generate a route 2', () => {
        route.get('/test/:test', routeFunc).name('test');

        expect(route.getRoute('test', { test: 'Quack' })).toBe('/test/Quack');
    });
});