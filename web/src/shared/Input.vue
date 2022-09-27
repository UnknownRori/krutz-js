<template>
    <input class='w-[100%] rounded border-gray-50 bg-gray-100 p-2 ring-1 ring-gray-300 text-gray-900' type='text'
        :value='modelValue' @input='$emit("update:modelValue", ($event.target as HTMLInputElement).value)'
        :placeholder='placeholder'>
</template>


<script setup lang='ts'>
defineProps<{
    placeholder: string,
    modelValue: string
}>();

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();
</script>