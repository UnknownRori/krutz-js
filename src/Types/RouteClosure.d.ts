import { FastifyRequest, FastifyReply } from 'fastify';

type RouteClosure = (request: FastifyRequest, reply: FastifyReply): Promise<any>;

export default RouteClosure;