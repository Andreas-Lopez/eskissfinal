
<template>
  <main>
    <div class="content-start grid grid-cols-2 bg-black">
      <div>
        <div class="bg-black mt-20">
          <div class="ml-32 bg-black">
            <h3 class="font-Luckiest text-white text-4xl pt-20">
              Redonnez vie <br />
              à un souvenir lointain
            </h3>
            <h4 class="font-Barlow text-white text-xl mt-10">
              Confiez un dessin cher à votre cœur à un de nos artistes afin
              qu’il lui donne vie à sa manière. Vous pouvez vous inscrire
              gratuitement ci-dessous.
            </h4>

            <Routerlink to="/Inscription">
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
                  ml-32
                  mt-10
                "
              >
                S'inscrire gratuitement
              </button>
            </Routerlink>
          </div>
        </div>
      </div>

      <div><img class="z-20 top-20" src="/tablette.svg" alt="Tablette" /></div>
    </div>
    <svg
      class="absolute left-0 right-0 top-[485px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f8e5ce"
        fill-opacity="1"
        d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,165.3C672,192,768,192,864,176C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>

    <div class="bg-Orange-1">
      <div class="flex-row">
        <div class="flexpostit">
          <div class="post-it1">
            <img class="m-auto" src="/familleicon.svg" alt="famille" />
            <h4 class="font-Luckiest text-xl">
              Vous êtes un parent qui souhaite donner vie au dessin de votre
              enfant ?
            </h4>

            <p class="font-Barlow text-lg font-semibold">
              Contactez un de nos artistes pour vous mettre en relation avec
              lui. Discutez de votre dessin via une messagerie pour rester en
              contact avec l’artiste.
            </p>
          </div>

          <div class="post-it3">
            <img class="m-auto" src="/donicon.svg" alt="don" />
            <h4 class="font-Luckiest text-xl">
              Vous voulez participer à une oeuvre de charité ?
            </h4>

            <p class="font-Barlow text-lg font-semibold">
              Une partie des achats sera directement redistribué à une
              association charitative en destination des enfants.
            </p>
          </div>
        </div>

        <div class="post-it2">
          <img class="m-auto" src="/artisticon.svg" alt="artiste" />
          <h4 class="font-Luckiest text-xl">
            Vous êtes un artiste voulant une nouvelle plateforme de création ?
          </h4>

          <p class="font-Barlow text-lg font-semibold">
            Contactez un de nos artistes pour vous mettre en relation avec lui.
            Discutez de votre dessin via une messagerie pour rester en contact
            avec l’artiste.
          </p>
        </div>
      </div>
    </div>
    <svg
      class="bg-rose-300"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f8e5ce"
        fill-opacity="1"
        d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,122.7C672,139,768,213,864,250.7C960,288,1056,288,1152,245.3C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <div class="content-start grid grid-cols-2 bg-rose-300">
      <div><img class="ml-20" src="/imgacc.png" alt="Artistes" /></div>

      <div>
        <div class="bg-rose-300 mt-20">
          <div class="ml-32 bg-rose-300">
            <h3 class="font-Luckiest text-black text-4xl pt-20">
              ESKISS est la pour répondre à votre <br />
              demande
            </h3>
            <h4 class="font-Barlow text-black text-xl font-semibold mt-10">
              Inscrivez vous gratuitement dès maintenant ou obtenez plus
              d’informations en cliquant sur “À propos”
            </h4>

            <RouterLink to="/Inscription">
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
                  ml-32
                  mt-10
                "
              >
                S'inscrire gratuitement
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
