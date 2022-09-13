import Ping from "../Controller/PingController";
import Route from "../Http/Route";

const router = new Route('/api');

router.get('/ping', Ping).name('ping');

export default router;