import { FastifySchema } from "fastify";

const UriSchema = {
    body: {
        type: 'object',
        properties: {
            uri: {
                type: 'string'
            }
        }
    }
} as FastifySchema;

export default UriSchema;