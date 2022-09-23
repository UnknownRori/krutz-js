import Uri from "../Model/Uri";

interface UriShortResponse {
    code: number,
    message: string,
    uri: Uri,
    redirect: string
}

export default UriShortResponse;