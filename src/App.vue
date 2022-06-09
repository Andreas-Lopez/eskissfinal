<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <RouterLink
        to="/"
        class="flex items-center flex-shrink-0 text-white mr-6"
      >
        <img src="/logo.svg" alt="" />
      </RouterLink>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow text-right">
          <RouterLink
            to="/Don"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Luckiest
              text-xl
            "
            >Faire un don
          </RouterLink>
          <RouterLink
            to="/Galerie"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Luckiest
              text-xl
            "
            >Galerie
          </RouterLink>
          <RouterLink
            to="/Contact"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Luckiest
              text-xl
            "
            >Contact
          </RouterLink>
          <RouterLink
            to="/Propos"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Luckiest
              text-xl
            "
            >A propos
          </RouterLink>
        </div>
        <RouterLink
          to="/Messagerie"
          class="flex items-center flex-shrink-0 text-white mr-6"
        >
          <img src="/Lettre.svg" alt="" />
        </RouterLink>
        <div>
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
              "
            >
              Mon Compte
            </button>
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />

  <footer class="pl-24">
    <div class="flex-row width70">
      <div class="barreblanche"></div>
      <h3 class="titlefoot text-Police-Footer-1 font-Barlow font-bold">
        Rejoignez-nous
      </h3>
      <div class="barreblanche"></div>
    </div>
    <div class="flex-row width65">
      <div class="navigation">
        <h4 class="titlefoot2 text-Police-Footer-1 font-Barlow font-bold">
          Navigation
        </h4>
        <RouterLink to="/Contact">Contact</RouterLink>
        <RouterLink to="/Propos">A propos</RouterLink>
        <RouterLink to="/Don">Faire un don</RouterLink>
        <RouterLink to="/CGV">CGV</RouterLink>
      </div>
      <div class="reseaux width30 pl-20">
        <a href="#"><img src="/instagram.svg" alt="insta" /></a>
        <a href="#"><img src="/facebook.svg" alt="facebook" /></a>
      </div>
      <div class="paiements">
        <h4 class="titlefoot2 text-Police-Footer-1 font-Barlow font-bold pl-32">
          Modes de paiement
        </h4>
        <div class="paiements2 pl-12">
          <img class="imgpaiement" src="/paypal.png" alt="Paypal" />
          <img class="imgpaiement" src="/mastercard.png" alt="Mastercard" />
          <img class="imgpaiement" src="/cb.png" alt="CB" />
          <img class="imgpaiement" src="/visa.png" alt="Visa" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import "@/assets/base.css";
@import "@/index.css";
@import "@/assets/footer.css";
@import "@/assets/bulles.css";
@import "@/assets/normalize.css";
@import "@/assets/inscription.css";
</style>

