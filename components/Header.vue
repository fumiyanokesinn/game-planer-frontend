<script setup></script>

<template>
  <header class="bg-gray-800 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div
      class="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl"
    >
      <img src="/Logo/Logo.png" alt="Game Planer" />
      <ul class="flex flex-col lg:flex-row lg:space-x-8 text-white">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile">Profile</NuxtLink>
        </li>
      </ul>
      <ColorMode class="flex !justify-end" />
    </div>
  </header>
</template>
