<template>
    <div class="flex justify-between items-center mb-2">
        <p class="font-medium text-sm">{{ title }}</p>
        <p class="font-medium text-sm">${{ price }}</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    price: {
        type: [String, Number],
        required: true
    }
})
</script>