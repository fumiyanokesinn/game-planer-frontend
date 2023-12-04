<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const { data, pending, error, refresh } = await useFetch(
    'https://jp1.api.riotgames.com/lol/summoner/v4/summoners/by-name/DJAgape?api_key=RGAPI-7e48db8c-d6c2-4bf5-ae89-8835e0bba5cd'
  );

  const route = useRoute();
</script>
<template>
  {{ route.params.user }}
  {{ route.params.region }}
</template>
