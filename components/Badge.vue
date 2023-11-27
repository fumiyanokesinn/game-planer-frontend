<script setup lang="ts">
  const props = defineProps({
    badgeName: {
      type: String,
      required: true
    },
    itemName: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <div class="flex items-center space-x-4">
    <UBadge size="lg" class="text-xs w-14 md:w-20 md:text-xl">{{
      badgeName
    }}</UBadge>
    <p class="text-xs md:text-xl">{{ itemName }}</p>
  </div>
</template>
