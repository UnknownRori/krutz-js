<template>
    <h1 class='text-center text-red-600'>Hello, World!</h1>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';

onMounted(() => {
    fetch(`http://127.0.0.1:3000/api/ping`, {
    }).then((res) => res.json()).then(res => console.log(res)).catch(err => console.error(err));
    console.log(import.meta.env.VITE_API_URL);
});
</script>
