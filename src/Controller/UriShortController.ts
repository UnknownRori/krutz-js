import { FastifyReply, FastifyRequest } from "fastify";
import UriShortRequest from "../Types/UriShortRequest";
import prisma from "../Services/Prisma";
import RandomString from "../Services/RandomStringService";

const store = async (request: FastifyRequest, reply: FastifyReply) => {
    const requestBody = request.body as UriShortRequest;

    try {
        const RandomStringService = new RandomString();

        const newUrl = await prisma.url.create({
            "data": {
                short: await RandomStringService.generate(),
                url: requestBody.uri
            }
        });

        reply
            .status(201)
            .send({
                code: 201,
                message: 'URI successfully shorten!',
                uri: {
                    uri: newUrl.url,
                    short: newUrl.short,
                    createdAt: newUrl.createdAt
                }
            });
    } catch (e) {
        console.error(e);
        reply
            .status(508)
            .send({
                code: 508,
                message: 'Try again later',
                explain: 'Too many shorting attempt on the server'
            });
    }
};

export default { store };