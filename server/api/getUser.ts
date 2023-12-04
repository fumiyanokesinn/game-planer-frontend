import { useFetch } from 'nuxt/app';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();

  const health: Object = await $fetch(
    `https://jp1.api.riotgames.com/lol/summoner/v4/summoners/by-name/DJAgape?api_key=${runtimeConfig.riotApiKey}`
  );

  return { ...health };
});
