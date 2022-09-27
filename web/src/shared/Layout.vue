<template>
    <main :class='`min-h-screen bg-[url(${grid})]`'>
        <slot></slot>
    </main>
</template>

<script setup lang="ts">
import grid from '@/assets/grid.svg';
</script>