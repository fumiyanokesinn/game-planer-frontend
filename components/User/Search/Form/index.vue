<script setup lang="ts">
  const { $regions } = useNuxtApp();
  const region = ref($regions[0]);

  const name = ref('');
  const getUser = () => navigateTo(`/users/${region.value}/${name.value}`);
</script>

<template>
  <UContainer class="w-1/3">
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      v-model="name"
      v-on:keyup.enter="getUser"
      placeholder="Search... Please Input Summoner Name"
      color="gray"
      size="xl"
      :ui="{
        icon: { trailing: { pointer: '' } },
        trailing: { padding: { xl: 'pe-40' } }
      }"
    >
      <template #trailing>
        <USelect
          class="z-10"
          color="yellow"
          v-model="region"
          :options="$regions"
        />
      </template>
    </UInput>
  </UContainer>
</template>
