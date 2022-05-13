<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/logo.svg" alt="" />
      </div>
      <div class="block lg:hidden">
        <button
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-teal-200
            border-teal-400
            hover:text-white hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow text-right">
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-4
            "
          >
            Faire un don
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-4
            "
          >
            Galerie
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
            "
          >
            Contact
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              ml-4
              mr-4
              text-white
              hover:text-Boutons-1
            "
          >
            A propos
          </a>
        </div>
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/Lettre.svg" alt="" />
        </div>
        <button
          class="
            bg-Boutons-1
            hover:bg-black
            text-black
            font-bold
            py-2
            px-7
            hover:border-black hover:text-Boutons-1
            rounded-3xl
            border-2 border-black
            text-xl
          "
        >
          S'inscrire
        </button>
      </div>
    </nav>
    <h1 class="text-6xl text-blue-800 font-bold m-4 text-center">
      Guide de style
    </h1>
    <div class="border-2 my-5 mx-5"></div>
    <h2 class="ml-4 font-bold text-3xl underline text-rose-500">
      Couleurs principales
    </h2>

    <div class="flex justify-center">
      <div class="h-20 w-28 bg-black m-4 flex justify-center">#000000</div>
      <div
        class="h-20 w-28 bg-white m-4 flex justify-center border-2 text-black"
      >
        #FFFFFF
      </div>
      <div
        class="h-20 w-28 bg-Police-Footer-1 m-4 flex justify-center text-black"
      >
        Police-Footer
      </div>
      <div class="h-20 w-28 bg-Canson1-1 m-4 flex justify-center text-black">
        Canson1-1
      </div>
    </div>
    <div class="flex justify-center">
      <div class="h-20 w-28 bg-Canson2-2 m-4 flex justify-center text-black">
        Canson2-2
      </div>
      <div class="h-20 w-28 bg-Boutons-1 m-4 flex justify-center text-black">
        Boutons-1
      </div>
      <div class="h-20 w-28 bg-rose-300 m-4 flex justify-center text-black">
        rose-300
      </div>
    </div>

    <div class="border-2 my-5 mx-5"></div>
    <h2 class="ml-4 font-bold text-3xl underline text-rose-500">Polices</h2>

    <div class="border-2 my-5 mx-5"></div>
    <h2 class="ml-4 font-bold text-3xl underline text-rose-500 mb-4">
      Boutons
    </h2>

    <div>
      <button
        class="
          bg-Boutons-1
          hover:bg-black
          text-black
          font-bold
          py-2
          px-7
          hover:border-black hover:text-Boutons-1
          rounded-3xl
          border-2 border-black
          text-xl
        "
      >
        Envoyer
      </button>
      <button
        class="
          bg-Boutons-1
          hover:bg-black
          text-black
          font-bold
          py-2
          px-7
          hover:border-black hover:text-Boutons-1
          rounded-3xl
          border-2 border-black
          text-xl
        "
      >
        S'inscrire
      </button>
      <button
        class="
          bg-Boutons-1
          hover:bg-black
          text-black
          font-bold
          py-2
          px-7
          hover:border-black hover:text-Boutons-1
          rounded-3xl
          border-2 border-black
          text-xl
        "
      >
        Mon compte
      </button>
    </div>
  </header>
</template>