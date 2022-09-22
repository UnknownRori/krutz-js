import Http from "../Enum/Http";
import RouteClosure from "./RouteClosure";

interface RouteSelection {
    uri: string,
    method: Http,
    action: RouteClosure
}