<template>
  <main>
    <div class="flex">
      <aside class="w-64" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 h-full bg-Canson1-1 rounded">
          <ul class="space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20 ml-auto mr-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <li>
              <RouterLink
                to="/MonCompte"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="ml-3">Gérer mon compte</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/Commandes"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Mes commandes</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/Parametres"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                  bg-black bg-opacity-30
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Paramètres</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/Favoris"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-900
                  rounded-lg
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap"
                  >Artistes Favoris</span
                >
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>
      <div class="ml-20 mt-5">
        <div class="relative text-center mb-10">
          <img src="/trace.svg" alt="trace_rose" />
          <div class="absolute w-[600px] top-[30%] left-[10%]">
            <h2 class="font-Luckiest text-6xl text-black">Paramètres</h2>
          </div>
        </div>

        <div class="flex ml-32">
          <div class="flex justify-between bg-Canson1-1 mb-10 p-5">
            <div class="w-96">
              <div>
                <div class="flex justify-between pb-3">
                  <p>Pays</p>
                  <p>France</p>
                </div>
                <div class="flex justify-between pb-3">
                  <p>Ville</p>
                  <p>Montbéliard</p>
                </div>
                <div class="flex justify-between">
                  <p>Date de naissance</p>
                  <p>16/09/2002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex ml-32">
          <div class="flex justify-between bg-Canson1-1 mb-10 p-5">
            <div class="w-[900px]">
              <div>
                <input
                  type="text"
                  id="mail"
                  class="bg-Canson1-1 pl-5 pb-32 focus:outline-none"
                  placeholder="Ma description ici"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>