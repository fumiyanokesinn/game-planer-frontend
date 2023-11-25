<template>
  <div class="mx-20">
    <div class="flex justify-center mb-8">
      <p class="text-7xl">Profile</p>
    </div>

    <div class="flex justify-evenly h-80 mb-20">
      <div class="w-1/3">
        <p class="text-4xl text-center mb-4">WHO AM I</p>
        <UCard class="h-full">
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
                <p class="text-xl">Game Create</p>
              </li>
            </ui>
            <p class="text-xl">Favorite Rock Bands</p>
            <div class="flex space-x-4">
              <ULink
                to="https://open.spotify.com/intl-ja/artist/6olE6TJLqED3rqDCT0FyPh"
                target="_blank"
                ><p>Nirvana</p></ULink
              >
              <ULink
                to="https://open.spotify.com/intl-ja/artist/40Yq4vzPs9VNUrIBG5Jr2i"
                target="_blank"
                ><p>Smash Pumpkins</p></ULink
              >
              <ULink
                to="https://open.spotify.com/intl-ja/artist/3RNrq3jvMZxD9ZyoOZbQOD"
                target="_blank"
              >
                <p>Korn</p>
              </ULink>
              <ULink
                to="https://open.spotify.com/intl-ja/artist/2d0hyoQ5ynDBnkvAbJKORj"
                target="_blank"
              >
                <p>Rage Against The Machine</p>
              </ULink>
            </div>
          </div>
        </UCard>
      </div>
      <div class="w-1/3">
        <p class="text-4xl text-center mb-4">My Skill</p>
        <UCard class="h-full">
          <p class="mb-4">
            <NuxtLink to="https://skillicons.dev" target="_blank">
              <img
                src="https://skillicons.dev/icons?i=git,docker,java,php,laravel,js,react,redux,vue,nuxtjs"
              />
            </NuxtLink>
          </p>
          <p class="text-center text-2xl">My Favorite Skill</p>
          <NuxtLink to="https://godotengine.org/" target="_blank">
            <img
              src="https://storage.googleapis.com/zenn-user-upload/wcau04bhl793ufoq5woj0978lrw6"
            />
          </NuxtLink>
        </UCard>
      </div>
    </div>
    <div class="flex justify-center mb-8">
      <p class="text-7xl">OutPut</p>
    </div>
    <div class="flex justify-center">
      <UCard class="w-2/3"></UCard>
    </div>
  </div>
</template>
