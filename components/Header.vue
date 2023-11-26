<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Nav',
    setup() {
      return {};
    }
  });
</script>

<template>
  <header class="bg-gray-800 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div
      class="flex justify-between lg:flex flex-nowrap lg:justify-around items-center mx-auto max-w-screen-xl"
    >
      <img src="/Logo/Logo.png" alt="Game Planer" />
      <ul
        class="hidden lg:flex flex-nowrap flex-col lg:flex-row lg:space-x-8 text-white"
      >
        <li>
          <ULink to="/">Home</ULink>
        </li>
        <li>
          <ULink to="/profile">Profile</ULink>
        </li>
      </ul>
      <ColorMode class="hidden lg:flex !justify-end" />
      <div class="lg:hidden">
        <!-- <nav> -->
        <Button />
        <!-- <div class="nav-items" v-bind:class="{ 'is-active': open }">
            <div class="nav-item">Home</div>
            <div class="nav-item">About</div>
            <div class="nav-item">Topic</div>
          </div>
        </nav> -->
      </div>
    </div>
  </header>
</template>
