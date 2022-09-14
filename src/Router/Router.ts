import Ping from "../Controller/PingController";
import UriShortController from "../Controller/UriShortController";
import Route from "../Http/Route";
import UriSchema from "../Schema/UriSchema";

const router = new Route('/api');

router.get('/ping', Ping).name('ping');
router.post('/uri/short', UriShortController).schema(UriSchema);

export default router;