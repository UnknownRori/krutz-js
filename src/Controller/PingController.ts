import { FastifyReply, FastifyRequest } from "fastify";

const Ping = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({
        'code': 200,
        'message': 'Pong!'
    });
};

export default Ping;