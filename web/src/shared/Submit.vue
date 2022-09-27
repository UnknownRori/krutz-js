<template>
    <input type="submit" class="cursor-pointer rounded bg-gray-500 sm:text-sm md:text-md p-2
         text-white ring-1 ring-gray-600 transition-colors duration-200 
         hover:bg-gray-800 hover:ring-gray-800" :value='value'>
</template>

<script setup lang='ts'>
defineProps<{
    value: string,
}>();
</script>