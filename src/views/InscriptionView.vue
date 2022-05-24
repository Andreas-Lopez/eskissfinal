<template>
  <!-- component -->
  <div
    class="
      bg-[url('/fondinsc.jpg')]
      h-screen
      overflow-hidden
      flex
      items-center
      justify-center
    "
  >
    <div class="bg-black lg:w-5/12 md:6/12 w-10/12 shadow-3xl bg-opacity-50">
      <form class="p-12 md:p-24">
        <div class="flex items-center text-lg mb-6 md:mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <input
            type="text"
            id="nom"
            class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Nom"
          />
        </div>

        <div class="flex items-center text-lg mb-6 md:mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <input
            type="password"
            id="password"
            class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Mot de passe"
          />
        </div>
        <div class="flex items-center text-lg mb-6 md:mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input
            type="text"
            id="mail"
            class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Adresse mail"
          />
        </div>
        <div class="flex mt-3 mb-3 ml-36">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5" />
            <div class="ml-2 text-white font-Barlow font-semibold">
              Je suis un artiste
            </div>
          </label>
        </div>
        <Routerlink to="/">
          <button
            class="
              bg-Boutons-1
              hover:bg-black
              text-black
              py-2
              px-7
              hover:border-black hover:text-Boutons-1
              rounded-3xl
              border-2 border-black
              font-Barlow font-bold
              text-xl
              ml-20
              mt-5
            "
          >
            S'inscrire gratuitement
          </button>
        </Routerlink>
      </form>
    </div>
  </div>
</template>