<template>
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
      <form @submit.prevent="onCnx" class="p-12 md:p-24">
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
            type="email"
            id="nom"
            class="
              bg-gray-200
              pl-12
              py-2
              md:py-4
              focus:outline-none
              w-full
              form-control
            "
            placeholder="Adresse mail"
            v-model="user.email"
            required
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
            type="type"
            id="password"
            class="
              bg-gray-200
              pl-12
              py-2
              md:py-4
              focus:outline-none
              w-full
              form-control
            "
            placeholder="Mot de passe"
            v-model="user.password"
            required
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
        <div class="input-group-after">
          <button class="btn btn-light" @click.prevent="affiche()">
            <i class="fa fa-eye fa-lg"></i>
          </button>
        </div>
        <Routerlink to="/">
          <button
            type="submit"
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
              ml-32
              mt-5
            "
          >
            Se connecter
          </button>
        </Routerlink>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
export default {
  name: "MonCompte",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: null,
      view: false,
      type: "password",
      imageData: null,
    };
  },

  mounted() {
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          console.log("user", this.user);
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            password: null,
          };
        })
        .catch((error) => {
          console.log("erreur deconnexion", error);
        });
    },
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>
