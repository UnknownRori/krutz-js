import RouteClosure from "../Types/RouteClosure";
import RouteCollection from "../Types/RouteCollection";

export default class Route {
    public HEAD: RouteCollection = new Map();
    public GET: RouteCollection = new Map();
    public POST: RouteCollection = new Map();
    public PUT: RouteCollection = new Map();
    public PATCH: RouteCollection = new Map();
    public DELETE: RouteCollection = new Map();

    public head(url: string, closure: RouteClosure): void {
        this.HEAD.set(url, closure);
    }

    public get(url: string, closure: RouteClosure): void {
        this.GET.set(url, closure);
    }

    public post(url: string, closure: RouteClosure): void {
        this.POST.set(url, closure);
    }

    public put(url: string, closure: RouteClosure): void {
        this.PUT.set(url, closure);
    }

    public patch(url: string, closure: RouteClosure): void {
        this.PATCH.set(url, closure);
    }

    public delete(url: string, closure: RouteClosure): void {
        this.DELETE.set(url, closure);
    }
}