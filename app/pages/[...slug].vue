<script setup lang="ts">
definePageMeta({
  layout: false,
})

onMounted(() => {
  window.location.href = 'https://www.qq.com'
})
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    Redirecting...
  </div>
</template>
