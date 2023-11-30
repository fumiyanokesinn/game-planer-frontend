<script setup lang="ts">
  const props = defineProps({
    iconName: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '1em'
    },
    onClick: {
      type: Function,
      default(event: MouseEvent) {
        console.log(event);
      }
    }
  });

  const onclick = (event: MouseEvent) => props.onClick(event);
</script>

<template>
  <button v-on:click="onclick">
    <Icon :name="iconName" :size="size" />
  </button>
</template>
