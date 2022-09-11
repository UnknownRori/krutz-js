import App from "../../src/App";

test('Test ping endpoint', async () => {
    const app = new App();

    const fastify = app.getFastifyInstance();
    const response = await fastify.inject({ 'method': 'GET', url: '/api/ping' });

    expect(response.body).toEqual({ 'message': 'Pong!' });
    expect(response.statusCode).toBe(200);
});