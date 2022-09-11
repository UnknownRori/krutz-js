import RouteClosure from "../Types/RouteClosure";
import RouteCollection from "../Types/RouteCollection";

export default class Route {
    protected prefix: string;

    public HEAD: RouteCollection = new Map();
    public GET: RouteCollection = new Map();
    public POST: RouteCollection = new Map();
    public PUT: RouteCollection = new Map();
    public PATCH: RouteCollection = new Map();
    public DELETE: RouteCollection = new Map();

    constructor(prefix = '') {
        this.prefix = prefix;
    }

    public head(url: string, closure: RouteClosure): void {
        this.HEAD.set(this.combinePrefixAndURL(url), closure);
    }

    public get(url: string, closure: RouteClosure): void {
        this.GET.set(this.combinePrefixAndURL(url), closure);
    }

    public post(url: string, closure: RouteClosure): void {
        this.POST.set(this.combinePrefixAndURL(url), closure);
    }

    public put(url: string, closure: RouteClosure): void {
        this.PUT.set(this.combinePrefixAndURL(url), closure);
    }

    public patch(url: string, closure: RouteClosure): void {
        this.PATCH.set(this.combinePrefixAndURL(url), closure);
    }

    public delete(url: string, closure: RouteClosure): void {
        this.DELETE.set(this.combinePrefixAndURL(url), closure);
    }

    protected combinePrefixAndURL(url: string): string {
        return this.prefix + url;
    }
}