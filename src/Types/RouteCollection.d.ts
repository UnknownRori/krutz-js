import { FastifySchema } from "fastify";
import RouteClosure from "./RouteClosure";

type RouteCollection = Map<string, {
    schema?: FastifySchema
    action: RouteClosure
}>;

export default RouteCollection;