<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const { data, pending, error, refresh } = await useFetch(
    'http://localhost:3000/api/getUser'
  );

  const route = useRoute();
</script>
<template>
  {{ route.params.user }}
  {{ route.params.region }}
  {{ data }}
</template>
