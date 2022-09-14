import { FastifyReply, FastifyRequest } from "fastify";

// Todo! Properly implement shorten the uri
const UriShortController = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(201);
    reply.send({
        code: 201,
        message: 'URI successfully shorten!',
        uri: {
            uri: (request.body as UriShortResponse).uri,
            short: 'asdijasodjaso'
        }
    });
};

export default UriShortController;