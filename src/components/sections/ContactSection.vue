<!-- ContactSection.vue -->
<script setup>
/* Pas de logique complexe – on affiche juste un alert */
function submit (e) {
  e.preventDefault();
  alert('Merci ! Votre message a bien été envoyé.');
  e.target.reset();
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <!-- ========== Formulaire ========== -->
      <form class="form" @submit="submit">
        <h2 class="heading">Contact</h2>

        <label class="label">
          <span>Nom</span>
          <input type="text" name="name" required />
        </label>

        <label class="label">
          <span>E-mail</span>
          <input type="email" name="email" required />
        </label>

        <label class="label">
          <span>Message</span>
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit" class="btn">Envoyer</button>
      </form>

      <!-- ========== Infos / réseaux ========== -->
      <div class="info">
        <h3>Infos</h3>
        <p><strong>Basé :</strong> Tunis, Tunisie</p>
        <p><strong>E-mail :</strong> <a href="mailto:contact@fiollahome.com">contact@fiollahome.com</a></p>

        <h4>Réseaux sociaux</h4>
        <ul class="social">
          <li><a href="https://github.com/ghassensta" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/ghassensta" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com/ghassensta" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* -------- Section -------- */
.contact {
  padding: 80px 0;
  background: #fff;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 48px;
}

/* -------- Formulaire -------- */
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #0f172a;
}
.form {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 0.95rem;
  color: #0f172a;
}
input,
textarea {
  margin-top: 8px;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #0f172ade;
  box-shadow: 0 0 0 2px rgba(179, 139, 88, 0.2);
}

/* Bouton */
.btn {
  align-self: flex-start;
  padding: 14px 32px;
  background: #0f172ade;
  color: #fff;
  border: none;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s, transform 0.25s;
}
.btn:hover {
  background: #a27942;
  transform: translateY(-2px);
}

/* -------- Infos -------- */
.info h3,
.info h4 {
  margin: 0 0 16px;
  color: #0f172a;
}
.info p {
  margin: 0 0 12px;
  color: #444;
}
.info a {
  color: #0f172ade;
  text-decoration: none;
}
.info a:hover {
  text-decoration: underline;
}
.social {
  list-style: none;
  padding: 0;
  margin: 0;
}
.social li {
  margin-bottom: 8px;
}

/* -------- Responsive ≥ 768 px -------- */
@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 300px;   /* formulaire + colonne infos */
    align-items: start;
  }
  .btn { align-self: flex-end; }
}
</style>
