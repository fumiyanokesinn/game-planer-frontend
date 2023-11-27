<template>
  <div class="m-auto min-w-[18rem] max-w-md md:max-w-5xl md:min-w-[64rem]">
    <div class="text-center">
      <p class="text-7xl">Profile</p>
    </div>

    <div
      class="grid gap-y-4 grid-flow-row grid-cols-1 md:grid-cols-2 md:space-x-4"
    >
      <div>
        <p class="text-center text-4xl mb-4">WHO AM I</p>
        <UCard class="md:min-h-[22em]">
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
            <ul>
              <li class="mb-2">
                <Badge badge-name="Job" item-name="Web Programmer" />
              </li>
              <li class="mb-2">
                <Badge badge-name="Name" item-name="Shindori Fumiya" />
              </li>
              <li class="mb-2">
                <Badge badge-name="Hobby" item-name="Game Create" />
              </li>
            </ul>
            <p class="text-base md:text-xl">Favorite Rock Bands</p>
            <div class="grid grid-flow-row grid-cols-4 place-items-center">
              <ULink
                to="https://open.spotify.com/intl-ja/artist/6olE6TJLqED3rqDCT0FyPh"
                target="_blank"
                ><p class="text-sm md:text-base">・Nirvana</p></ULink
              >
              <ULink
                class="col-span-3"
                to="https://open.spotify.com/intl-ja/artist/40Yq4vzPs9VNUrIBG5Jr2i"
                target="_blank"
                ><p class="text-sm md:text-base">・Smash Pumpkins</p></ULink
              >
              <ULink
                to="https://open.spotify.com/intl-ja/artist/3RNrq3jvMZxD9ZyoOZbQOD"
                target="_blank"
              >
                <p class="text-sm md:text-base">・Korn</p>
              </ULink>
              <ULink
                class="col-span-3"
                to="https://open.spotify.com/intl-ja/artist/2d0hyoQ5ynDBnkvAbJKORj"
                target="_blank"
              >
                <p class="text-sm md:text-base">・Rage Against The Machine</p>
              </ULink>
            </div>
          </div>
        </UCard>
      </div>
      <div>
        <p class="text-4xl text-center mb-4">My Skill</p>
        <UCard class="md:min-h-[22rem]">
          <p class="mb-4">
            <ULink to="https://skillicons.dev" target="_blank">
              <img
                src="https://skillicons.dev/icons?i=git,docker,java,php,laravel,js,react,redux,vue,nuxtjs"
              />
            </ULink>
          </p>
          <p class="text-center text-2xl">My Favorite Skill</p>
          <ULink to="https://godotengine.org/" target="_blank">
            <img
              src="https://storage.googleapis.com/zenn-user-upload/wcau04bhl793ufoq5woj0978lrw6"
            />
          </ULink>
        </UCard>
      </div>
      <div class="md:col-span-2">
        <p class="text-center mb-4 text-4xl">OutPut Game</p>
        <div>
          <UCard>
            <div class="grid grid-cols-3 space-x-2 place-items-center">
              <ULink
                to="https://fumiyanokesinn.itch.io/flappy-godot"
                target="_blank"
              >
                <img
                  class="rounded-lg w-64 h-24 md:h-44"
                  src="https://img.itch.zone/aW1nLzEyOTIyMTYyLnBuZw==/315x250%23c/pdQmQq.png"
                />
                <p class="text-xs">Flappy Bird</p>
              </ULink>
              <ULink
                to="https://fumiyanokesinn.itch.io/block-breaker-demo"
                target="_blank"
              >
                <img
                  class="rounded-lg w-64 h-24 md:h-44"
                  src="https://img.itch.zone/aW1nLzEyMjA3NjYyLmpwZw==/315x250%23c/egb13T.jpg"
                />
                <p class="text-xs">Block Breaker</p>
              </ULink>
              <div>
                <img
                  class="rounded-lg w-64 h-24 md:h-44"
                  src="https://p.e-words.jp/img/Question-Mark.png"
                />
                <p class="text-xs">Coming Soon</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>
