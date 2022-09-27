<template>
    <form class="my-4 mx-2 flex md:flex-row sm:flex-col" @submit.prevent='submit'>
        <div class="mx-2 flex w-[100%] items-center m-2">
            <InputVue placeholder='Enter the link here' v-model='url' />
        </div>
        <div class="mx-2 flex w-[20%] justify-center items-center sm:m-auto">
            <SubmitVue value='Shorten URL' />
        </div>
    </form>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

import useFetch from '@/composable/useFetch';

import InputVue from '@/shared/Input.vue';
import SubmitVue from '@/shared/Submit.vue';

import type UriShortResponse from '@/types/UriShortResponse';

const fetchData = useFetch<
    UriShortResponse
>('/api/uri/short');

const emit = defineEmits<{
    (e: 'submit', url: string): void
}>();

const url = ref('');

const submit = async () => {
    emit('submit', '');

    const payload = {
        method: 'POST',
        body: JSON.stringify({
            uri: url.value
        })
    };

    emit('submit', import.meta.env.VITE_API_URL + (await fetchData(payload)).uri.redirect);
}

</script>