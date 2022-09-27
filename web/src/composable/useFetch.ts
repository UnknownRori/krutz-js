import { ref, onMounted } from 'vue';
import type { UnwrapRef } from 'vue';

/**
 * An composable useFetch function use passed url and then concat with the API Base URL
 * @param  url string
 * @param  payload RequestInit
 * @return T
 */
export default function useFetch<T>(url: string) {
    const BASE_PATH = import.meta.env.VITE_API_URL;

    const BASE_HEADERS = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    async function fetchData(payload: RequestInit = {}) {
        payload.headers = { ...payload.headers, ...BASE_HEADERS };
        const response = await fetch(`${BASE_PATH}${url}`, payload);
        const result = await response.json() as T;

        return result;
    }

    return fetchData;
}