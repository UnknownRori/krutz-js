import { FastifySchema } from "fastify";
import Http from "../Enum/Http";
import RouteClosure from "../Types/RouteClosure";
import RouteCollection from "../Types/RouteCollection";
import RouteNameCollection from "../Types/RouteNameCollection";
import { RouteSelection } from "../Types/RouteSelection";

/**
 * Custom implementation of Router class on top of Fastify Route
 */
export default class Route {
    protected prefix: string;
    protected current: RouteSelection;

    public HEAD: RouteCollection = new Map();
    public GET: RouteCollection = new Map();
    public POST: RouteCollection = new Map();
    public PUT: RouteCollection = new Map();
    public PATCH: RouteCollection = new Map();
    public DELETE: RouteCollection = new Map();
    public NAME: RouteNameCollection = new Map();

    /**
     * Initialize Route class
     * 
     * @param  prefix string
     * @return Route
     */
    constructor(prefix = '') {
        this.prefix = prefix;
        this.current = {
            action: function (r, q) { q.status(404); },
            uri: '',
            method: Http.HEAD
        };
    }

    /**
     * Add HEAD HTTP Endpoint
     * @param url string
     * @param closure RouteClosure
     * @returns this
     */
    public head(url: string, closure: RouteClosure): this {
        this.setCurrent(url, Http.HEAD, closure);
        this.HEAD.set(this.combinePrefixAndURL(url), { action: closure });
        return this;
    }
    /**
     * Add GET HTTP Endpoint
     * @param url string
     * @param closure RouteClosure
     * @returns this
     */
    public get(url: string, closure: RouteClosure): this {
        this.setCurrent(url, Http.GET, closure);
        this.GET.set(this.combinePrefixAndURL(url), { action: closure });
        return this;
    }

    /**
     * Add POST HTTP Endpoint
     * @param url string
     * @param closure RouteClosure
     * @returns this
     */
    public post(url: string, closure: RouteClosure): this {
        this.setCurrent(url, Http.POST, closure);
        this.POST.set(this.combinePrefixAndURL(url), { action: closure });
        return this;
    }

    /**
     * Add PUT HTTP Endpoint
     * @param url string
     * @param closure RouteClosure
     * @returns this
     */
    public put(url: string, closure: RouteClosure): this {
        this.setCurrent(url, Http.PUT, closure);
        this.PUT.set(this.combinePrefixAndURL(url), { action: closure });
        return this;
    }

    /**
     * Add PATCH HTTP Endpoint
     * @param url string
     * @param closure RouteClosure
     * @returns this
     */
    public patch(url: string, closure: RouteClosure): this {
        this.setCurrent(url, Http.PATCH, closure);
        this.PATCH.set(this.combinePrefixAndURL(url), { action: closure });
        return this;
    }

    /**
     * Add DELETE HTTP Endpoint
     * @param url string
     * @param closure RouteClosure
     * @returns this
     */
    public delete(url: string, closure: RouteClosure): this {
        this.setCurrent(url, Http.DELETE, closure);
        this.DELETE.set(this.combinePrefixAndURL(url), { action: closure });
        return this;
    }

    /**
     * Add Current Route a Name
     * @param name string
     * @returns this
     */
    public name(name: string): this {
        this.NAME.set(name, this.current.uri);
        return this;
    }

    /**
     * Add schema to the uri
     * @param schema FastifySchema
     * @returns this
     */
    public schema(schema: FastifySchema) {
        switch (this.current.method) {
            case Http.HEAD:
                this.HEAD.set(this.current.uri, { action: this.current.action, schema: schema });
                break;
            case Http.GET:
                this.GET.set(this.current.uri, { action: this.current.action, schema: schema });
                break;
            case Http.POST:
                this.POST.set(this.current.uri, { action: this.current.action, schema: schema });
                break;
            case Http.PUT:
                this.PUT.set(this.current.uri, { action: this.current.action, schema: schema });
                break;
            case Http.PATCH:
                this.PATCH.set(this.current.uri, { action: this.current.action, schema: schema });
                break;
            case Http.DELETE:
                this.DELETE.set(this.current.uri, { action: this.current.action, schema: schema });
                break;
        }

        return this;
    }

    /**
     * Get the route using name as a context
     * @param name string
     * @returns string|undefined
     */
    public getRoute(name: string, param: { [index: string]: string } = {}): string | undefined {
        let result = this.NAME.get(name);

        for (const k in param) {
            result = result?.replace(`:${k}`, param[k]);
        }

        return result;
    }

    /**
     * Combine the URL with Route Prefix
     * @param url string
     * @returns string
     */
    protected combinePrefixAndURL(url: string): string {
        return this.prefix + url;
    }

    /**
     * Set the current URI
     * @param uri string
     * @param method Http
     * @param action RouteClosure
     */
    protected setCurrent(uri: string, method: Http, action: RouteClosure) {
        this.current = this.current = { method: method, uri: uri, action: action };
    }
}