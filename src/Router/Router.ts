import { FastifyReply, FastifyRequest } from "fastify";
import Route from "../Http/Route";

const router = new Route('/api');

router.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ "message": "Pong!" });
});

export default router;