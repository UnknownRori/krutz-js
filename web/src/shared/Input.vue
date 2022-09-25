<template>
    <input :type='type' :value='modelValue'
        @input='$emit("update:modelValue", ($event.target as HTMLInputElement).value)' :placeholder='placeholder'>
</template>


<script setup lang='ts'>
defineProps<{
    type: string,
    placeholder: string,
    modelValue: string
}>();

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();
</script>