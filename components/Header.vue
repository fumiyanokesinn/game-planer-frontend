<script setup></script>

<template>
  <header class="bg-gray-800 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div
      class="flex flex-nowrap justify-around items-center mx-auto max-w-screen-xl"
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
    </div>
  </header>
</template>
