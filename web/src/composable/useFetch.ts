import { ref, onMounted } from 'vue';
import type { UnwrapRef } from 'vue';

/**
 * An composable useFetch function use passed url and then concat with the API Base URL
 * @param  url string
 * @param  payload RequestInit
 * @return Ref<UnwrapRef<T>
 */
export default function useFetch<T>(url: string, payload: RequestInit) {
    const state = ref<T | null>(null);

    const BASE_PATH = import.meta.env.VITE_API_URL;

    onMounted(async () => {
        const result = await fetch(`${BASE_PATH}${url}`, payload);
        state.value = await result.json() as UnwrapRef<T>;
    })

    return state;
}