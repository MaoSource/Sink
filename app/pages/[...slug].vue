<script setup lang="ts">
definePageMeta({
  layout: false,
})

await navigateTo('https://www.qq.com', { external: true, replace: true })
</script>

<template>
  <div />
</template>
