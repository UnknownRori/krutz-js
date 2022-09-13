import { FastifyReply, FastifyRequest } from "fastify";

const Ping = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ "message": "Pong!" });
};

export default Ping;