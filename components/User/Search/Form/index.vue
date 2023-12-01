<script setup>
  const countries = ['United States', 'Canada', 'Mexico'];
  const value = ref('');
</script>

<template>
  <UContainer class="w-1/3">
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      v-model="value"
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
