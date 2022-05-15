<template>
  <main>
    <section>
      <div class="container">
        <form class="m-auto" style="max-width: 600px">
          <div class="txtform">
            <img src="assets/icones/user.svg" alt="utilisateur" />
            <label for="nom0" class="col-md-5 col-form-label">Nom</label>
            <div class="col-md-7">
              <input
                type="text"
                class="form-control"
                id="nom0"
                name="nom"
                required
              />
            </div>
          </div>
          <div class="txtform">
            <img src="assets/icones/lock.svg" alt="cadena" />
            <label for="mot-de-passe1" class="col-md-5 col-form-label"
              >Mot de passe</label
            >
            <div class="col-md-7">
              <input
                type="password"
                class="form-control"
                id="mot-de-passe1"
                name="mot-de-passe"
                required
              />
            </div>
          </div>
          <div class="txtform">
            <img src="assets/icones/mail.svg" alt="mail" />
            <label for="e-mail3" class="col-md-5 col-form-label">E-mail</label>
            <div class="col-md-7">
              <input
                type="email"
                class="form-control"
                id="e-mail3"
                name="e-mail"
                required
              />
            </div>
          </div>
          <label class="b-contain">
            <span>Je suis un artiste</span>
            <input type="checkbox" />
            <div class="b-input"></div>
          </label>
        </form>
        <div class="boutoninscription3">
          <a href="inscription.html">S'inscrire gratuitement</a>
        </div>
      </div>
    </section>
  </main>
</template>