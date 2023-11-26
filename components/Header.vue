<script setup lang="ts">
  var isOpen: boolean = false;
  const items = [
    [
      {
        label: 'Home',
        icon: 'i-heroicons-arrow-right-circle-20-solid',
        click: () => {
          navigateTo('/');
        }
      },
      {
        label: 'Profile',
        icon: 'i-heroicons-arrow-right-circle-20-solid',
        click: () => {
          navigateTo('/profile');
        }
      }
    ]
  ];
  function onclick() {
    isOpen = !isOpen;
    console.log(isOpen);
  }
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
      <ColorMode class="invisible lg:visible" />
      <div class="flex items-center lg:invisible">
        <ColorMode />
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <Icon name="prime:align-justify" size="2em" />
        </UDropdown>
      </div>
    </div>
  </header>
</template>
