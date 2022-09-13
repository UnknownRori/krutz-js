import App from "../../src/App";

test('Test ping endpoint', async () => {
    const app = new App();

    const fastify = app.getFastifyInstance();
    const response = await fastify.inject({ 'method': 'GET', url: '/api/ping' });
    const expectedResponseBody = JSON.stringify({
        'code': 200,
        'message': 'Pong!'
    });

    expect(response.body).toEqual(expectedResponseBody);
    expect(response.statusCode).toBe(200);
});