import { FastifyReply, FastifyRequest } from "fastify";
import Route from "../Http/Route";

const router = new Route();

router.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ "message": "Hello, World!" });
});

export default router;