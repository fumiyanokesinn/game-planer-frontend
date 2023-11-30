<script setup>
  const value = ref('');
</script>

<template>
  <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    v-model="value"
    placeholder="Search..."
    color="gray"
    size="xl"
  />
</template>
