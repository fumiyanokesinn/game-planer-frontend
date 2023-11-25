<template>
  <div class="flex justify-center mb-8">
    <p class="text-7xl">Profile</p>
  </div>

  <div class="px-20 flex justify-evenly">
    <div class="w-1/3">
      <p class="text-3xl text-center mb-4">WHO AM I</p>
      <UCard>
        <UDivider class="mb-4">
          <ULink to="https://github.com/fumiyanokesinn" target="_blank">
            <img
              class="rounded-full"
              src="https://avatars.githubusercontent.com/u/130265659?v=4"
              alt="Git Logo"
            />
          </ULink>
        </UDivider>
        <div>
          <ui>
            <li class="flex items-center space-x-4 mb-2">
              <UBadge size="lg" class="w-20">Job</UBadge>
              <p class="text-xl">Web Programmer</p>
            </li>
            <li class="flex items-center space-x-4 mb-2">
              <UBadge size="lg" class="w-20">Name</UBadge>
              <p class="text-xl">Shindori Fumiya</p>
            </li>
            <li class="flex items-center space-x-4 mb-2">
              <UBadge size="lg" class="w-20">Hobby</UBadge>
              <p class="text-xl">Game Creator</p>
            </li>
          </ui>
        </div>
      </UCard>
    </div>
    <div class="w-1/3">
      <p class="text-3xl text-center mb-4">My Skill</p>
      <UCard>
        <p>
          <NuxtLink to="https://skillicons.dev" target="_blank">
            <img
              src="https://skillicons.dev/icons?i=git,docker,java,php,laravel,js,react,redux,vue,nuxtjs"
            />
          </NuxtLink>
        </p>
      </UCard>
    </div>
  </div>
</template>
