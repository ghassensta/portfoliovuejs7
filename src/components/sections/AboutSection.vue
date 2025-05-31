<!-- AboutSection.vue -->
<template>
  <section id="about" class="about">
    <div class="container">
      <!-- Colonne image -->
      <div class="avatar-col">
        <img src="" alt="Photo de Ghassen Sta" class="avatar" />
      </div>

      <!-- Colonne texte -->
      <div class="text-col">
        <h2 class="heading">À&nbsp;propos</h2>

        <p class="intro">
          Ingénieur backend passionné, je conçois des architectures
          <strong>Laravel</strong>&nbsp;/&nbsp;<strong>Vue.js</strong> performantes, testées et scalables.
          Depuis plus de&nbsp;3&nbsp;ans, j’accompagne des PME et
          des start-ups à transformer leurs idées en produits fiables,
          en mettant l’accent sur la maintenabilité et la qualité du
          code.
        </p>

        <ul class="details">
          <li><strong>Basé à&nbsp;:</strong> Tunis, Tunisie</li>
          <li><strong>Expérience&nbsp;:</strong> 5+&nbsp;ans en développement PHP/JS</li>
          <li><strong>Spécialités&nbsp;:</strong> APIs REST, CI/CD, Docker, tests automatisés</li>
        </ul>

        <a href="/docs/CV-Ghassen-Sta.pdf" class="btn" target="_blank">Télécharger mon&nbsp;CV&nbsp;PDF</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Section ---------- */
.about {
  padding: 80px 0;
  background: #f8fafc;          /* gris clair */
}

/* ---------- Grille ---------- */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-gap: 48px;
  align-items: center;
}

/* ---------- Avatar ---------- */
.avatar-col {
  text-align: center;
}
.avatar {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* ---------- Texte ---------- */
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #0f172a;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 24px;
  color: #444;
}

.details {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
}
.details li {
  margin-bottom: 8px;
  font-size: 1rem;
}
.details strong {
  color: #0f172a;
}

/* ---------- Bouton CV ---------- */
.btn {
  display: inline-block;
  padding: 14px 32px;
  background: #b38b58;
  color: #fff;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.25s, transform 0.25s;
}
.btn:hover {
  background: #a27942;
  transform: translateY(-2px);
}

/* ---------- Responsive < 800 px ---------- */
@media (max-width: 799px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .heading {
    margin-top: 32px;
  }
}
</style>
