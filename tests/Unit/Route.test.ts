import Route from "../../src/Http/Route";

describe("Testing the Route class", () => {
    let route: Route;

    beforeEach(() => {
        route = new Route();
    });


    test('Create Route instance', () => {
        expect(route).toBeInstanceOf(Route);
    });

    test('It can create HTTP Route HEAD', () => {
        route.head('/', async (request, reply) => {
            reply.send({ "message": "Pong!" });
        });

        expect(route.HEAD.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route GET', () => {
        route.get('/', async (request, reply) => {
            reply.send({ "message": "Pong!" });
        });

        expect(route.GET.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route POST', () => {
        route.post('/', async (request, reply) => {
            reply.send({ "message": "Pong!" });
        });

        expect(route.POST.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route PUT', () => {
        route.put('/', async (request, reply) => {
            reply.send({ "message": "Pong!" });
        });

        expect(route.PUT.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route PATCH', () => {
        route.patch('/', async (request, reply) => {
            reply.send({ "message": "Pong!" });
        });

        expect(route.PATCH.has('/')).toBeTruthy();
    });

    test('It can create HTTP Route DELETE', () => {
        route.delete('/', async (request, reply) => {
            reply.send({ "message": "Pong!" });
        });

        expect(route.DELETE.has('/')).toBeTruthy();
    });
});