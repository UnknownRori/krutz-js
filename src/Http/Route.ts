import RouteClosure from "../Types/RouteClosure";
import RouteCollection from "../Types/RouteCollection";
import RouteNameCollection from "../Types/RouteNameCollection";

export default class Route {
    protected prefix: string;
    protected current: string;

    public HEAD: RouteCollection = new Map();
    public GET: RouteCollection = new Map();
    public POST: RouteCollection = new Map();
    public PUT: RouteCollection = new Map();
    public PATCH: RouteCollection = new Map();
    public DELETE: RouteCollection = new Map();
    public NAME: RouteNameCollection = new Map();

    constructor(prefix = '') {
        this.prefix = prefix;
        this.current = '';
    }

    public head(url: string, closure: RouteClosure): this {
        this.current = url;
        this.HEAD.set(this.combinePrefixAndURL(url), closure);
        return this;
    }

    public get(url: string, closure: RouteClosure): this {
        this.current = url;
        this.GET.set(this.combinePrefixAndURL(url), closure);
        return this;
    }

    public post(url: string, closure: RouteClosure): this {
        this.current = url;
        this.POST.set(this.combinePrefixAndURL(url), closure);
        return this;
    }

    public put(url: string, closure: RouteClosure): this {
        this.current = url;
        this.PUT.set(this.combinePrefixAndURL(url), closure);
        return this;
    }

    public patch(url: string, closure: RouteClosure): this {
        this.current = url;
        this.PATCH.set(this.combinePrefixAndURL(url), closure);
        return this;
    }

    public delete(url: string, closure: RouteClosure): this {
        this.current = url;
        this.DELETE.set(this.combinePrefixAndURL(url), closure);
        return this;
    }

    public name(name: string): this {
        this.NAME.set(name, this.current);
        return this;
    }

    public getRoute(name: string): string | undefined {
        return this.NAME.get(name);
    }

    protected combinePrefixAndURL(url: string): string {
        return this.prefix + url;
    }
}