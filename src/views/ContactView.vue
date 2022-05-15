<template>
  <body class="bg-Canson1-1">
    <main>
      <div class="relative text-center mb-10">
        <img class="ml-[35%]" src="/trace.svg" alt="trace_rose" />
        <div class="absolute top-[30%] left-[40%]">
          <h2 class="font-Luckiest text-6xl text-black">Contact</h2>
        </div>
      </div>
      <h3 class="font-bold font-Barlow text-black text-3xl text-center mb-10">
        Une question ? Contactez nous !
      </h3>
      <form class="w-full max-w-lg bg-white rounded-lg ml-auto mr-auto p-10">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-first-name"
            >
              Prénom
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-red-500
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-first-name"
              type="text"
            />
            <p class="text-red-500 text-xs italic">Ce champ est nécessaire.</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-last-name"
            >
              Nom
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="grid-last-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="email"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-password"
            >
              Message
            </label>
            <textarea
              class="
                no-resize
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
                h-48
                resize-none
              "
              id="message"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
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
                content-center
                items-stretch
                ml-40
                mb-5
              "
              type="button"
            >
              Envoyer
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </main>
  </body>
</template>