import { FastifyReply, FastifyRequest } from "fastify";
import UriShortRequest from "../Types/UriShortRequest";
import prisma from "../Services/Prisma";
import RandomString from "../Services/RandomStringService";
import UriShortShowRequest from "../Types/UriShortShowRequest";
import Uri from '../Model/Uri';

const store = async (request: FastifyRequest, reply: FastifyReply) => {
    const requestBody = request.body as UriShortRequest;

    if (requestBody.uri == null)
        return reply.status(400)
            .send({
                code: 400,
                message: 'No URI Passed!'
            });

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

const show = async (request: FastifyRequest, reply: FastifyReply) => {
    const { short } = request.params as UriShortShowRequest;

    const result = await prisma.url.findFirst({ where: { short: short } });

    if (result == null)
        reply
            .status(404)
            .send({
                code: 404,
                message: 'URL not found!'
            });

    reply
        .status(200)
        .send({
            code: 200,
            uri: {
                uri: (result as Uri).url,
                short: (result as Uri).short,
                createdAt: (result as Uri).createdAt
            }
        });
};

export default { store, show };