<template>
    <div class="border-white border-b pb-4 pl-2">
        <p class="font-semibold text-white text-lg">{{ title }}</p>
    </div>
</template>
<script setup lang="ts">

defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>