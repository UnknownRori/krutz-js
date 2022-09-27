<template>
    <LayoutVue>
        <div class="m-auto flex min-h-screen w-[80%] flex-col justify-center">
            <header class="my-4 flex flex-col self-center">
                <h2 class="text-center font-bold text-gray-800 sm:text-6xl md:text-6xl lg:text-6xl">Krutz</h2>
            </header>
            <div
                class="my-4 flex flex-col self-center rounded bg-white p-6 shadow-xl ring-1 ring-gray-200 sm:w-[100%] md:w-[80%]">
                <h4 class="text-center font-bold text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl">Paste the URI to
                    be
                    shortened</h4>
                <FormVue @submit='submitEvent' />
                <div id='message-display' class="hidden rounded p-2 text-white">
                    URL is shorten
                </div>
                <p class="text-center text-gray-600">Use Krutz to shorten a URL or reduce a link.</p>
            </div>
            <section id='result-section' v-show='formEvent.message'
                class="flex flex-col self-center rounded bg-white p-6 shadow-xl ring-1 ring-gray-200 sm:w-[100%] md:w-[80%]">
                <a :href='formEvent.redirect' v-show='!formEvent.error' id='result-display'
                    class="text-blue-600 transition-colors duration-150 hover:text-blue-800 hover:underline font-bold">
                    {{ formEvent.redirect }}</a>
                <p :class='formEvent.error ? "text-red-700" : "text-green-600"'>
                    {{formEvent.message}}
                </p>
            </section>
        </div>
    </LayoutVue>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

import LayoutVue from '@/shared/Layout.vue';
import FormVue from '@/components/Form.vue';

import type FormComponentEvent from '@/types/FormComponentEvent';

const formEvent = ref<FormComponentEvent>({
    error: false,
    message: '',
    redirect: '',
});

const submitEvent = (event: FormComponentEvent) => {
    formEvent.value = event
}
</script>

