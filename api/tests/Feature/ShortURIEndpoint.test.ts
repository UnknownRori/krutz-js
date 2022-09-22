import UriShortResponse from "../../src/Types/UriShortResponse";
import { InjectOptions } from "fastify";
import App from "../../src/App";

test('Shorten the URI using following API Endpoint', async () => {
    const app = (new App()).getFastifyInstance();
    const uriToShort = 'https://google.com';
    const request = {
        method: 'POST',
        url: '/api/uri/short',
        payload: {
            uri: uriToShort
        }
    } as InjectOptions;

    const result = await app.inject(request);
    const response: UriShortResponse = JSON.parse(result.body);

    expect(result.statusCode).toBe(201);
    expect(response).toHaveProperty('code');
    expect(response).toHaveProperty('message');
    expect(response).toHaveProperty('uri');
    expect(response.uri).toHaveProperty('uri', uriToShort);
    expect(response.uri).toHaveProperty('short');
});