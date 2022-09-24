<template>
    <h1 class='text-center text-red-600'>Hello, World!</h1>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';

onMounted(() => {
    console.log(import.meta.env.VITE_API_HOST);
});
</script>
