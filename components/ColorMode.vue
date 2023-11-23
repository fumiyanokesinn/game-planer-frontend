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

<template>
  <div>
    <USelect
      v-model="$colorMode.preference"
      :options="modes"
      option-attribute="name"
    />
  </div>
</template>

<style>
  body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
  }
  .dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
  }
  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
</style>
