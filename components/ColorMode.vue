<template>
  <div class="flex !justify-end items-center">
    <USelect
      v-model="$colorMode.preference"
      :options="modes"
      option-attribute="name"
    />
    <img
      v-if="$colorMode.preference === 'dark'"
      src="/images/Icon/Moon.png"
      alt="Moon"
    />
    <img
      v-else-if="$colorMode.preference === 'sepia'"
      src="/images/Icon/Cafe.png"
      alt="Cafe"
    />
    <img v-else src="/images/Icon/Sun.png" alt="Sun" />
  </div>
</template>

<script setup>
  const modes = [
    {
      name: 'Light',
      value: 'light'
    },
    {
      name: 'Dark',
      value: 'dark'
    },
    {
      name: 'Sepia',
      value: 'sepia'
    }
  ];
</script>
