<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container mx-auto px-[1rem] sm:px-[8rem]">
    <nav class="flex justify-end gap-[1.5rem] py-4">
      <RouterLink class="text-gray-500 text-lg font-semibold" to="/">Product</RouterLink>
      <RouterLink class="text-gray-500 text-lg font-semibold" to="/cart">Cart</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
