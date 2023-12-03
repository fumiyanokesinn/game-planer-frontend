<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>
<template>
  {{ route.params.user }}
  {{ route.params.region }}
</template>
