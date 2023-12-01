<script setup>
  const countries = ['United States', 'Canada', 'Mexico'];
  const country = ref(countries[0]);
  const name = ref('');

  const getUser = () => console.log('ユーザーを取得します');
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
          v-model="country"
          :options="countries"
        />
      </template>
    </UInput>
  </UContainer>
</template>
