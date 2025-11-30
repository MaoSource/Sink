<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.location.href = 'https://www.qq.com'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex h-full w-full items-center justify-center">
      Redirecting to Google...
    </div>
  </NuxtLayout>
</template>
