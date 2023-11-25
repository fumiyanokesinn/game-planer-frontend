<template>
  <div class="items-center">
    <div class="text-white">ColorMode：</div>
    <USelect
      v-model="$colorMode.preference"
      :options="modes"
      option-attribute="name"
    />
    <img
      v-if="$colorMode.preference === 'dark'"
      src="/Logo/moon.png"
      alt="Moon"
    />
    <img v-else src="/Logo/sun.png" alt="Sun" />
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
