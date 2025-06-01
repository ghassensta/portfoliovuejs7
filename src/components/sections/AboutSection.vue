<!-- AboutSection.vue -->
<template>
  <section id="about" class="about">
    <div class="container">
      <!-- Colonne image -->
      <!-- Colonne image -->
      <div class="avatar-wrap">
        <img
          src="../../assets/img/ghassen-sta-image.jpeg"
          alt="Photo de Ghassen Sta"
          class="avatar"
        />
      </div>

      <!-- Colonne texte -->
      <!-- AboutSection.vue — bloc texte mis à jour -->
      <div class="text-col">
        <h2 class="heading">À&nbsp;propos</h2>

        <p class="intro">
          Étudiant en
          <strong>cycle ingénieur&nbsp;Software</strong> à
          <strong>EPI International Sousse</strong> (promo 2024-2027) et
          développeur web chez
          <strong>TriosWeb</strong> depuis mars 2024.
          Passionné par l’écosystème
          <strong>Laravel</strong> &
          <strong>Vue JS</strong>, je conçois déjà des MVP solides tout en
          consolidant mes compétences en qualité logicielle et DevOps.
        </p>

        <ul class="details">
          <li>
            <strong>Basé&nbsp;à&nbsp;:</strong> Sousse, Tunisie
          </li>
          <li>
            <strong>Expérience&nbsp;:</strong> 1&nbsp;an en développement&nbsp;PHP/JS
          </li>
          <li>
            <strong>Spécialités&nbsp;:</strong>
            Laravel&nbsp;Livewire / Inertia, Tailwind, APIs REST, déploiement
            Docker, intégrations WordPress / CRM
          </li>
        </ul>

        <a
          href="../../assets/docs/Cv-StaGhassen.pdf"
          download="Ghassen_Sta_CV.pdf"
          class="btn"
        >Télécharger mon&nbsp;CV&nbsp;PDF</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Section ---------- */
.about {
  padding: 80px 0;
  background: #f8fafc; /* gris clair */
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
  background: #0f172ade;
  color: #fff;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.25s, transform 0.25s;
}
.btn:hover {
  background: #0f172ade;
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

/* ----- Wrapper animé ----- */
.avatar-wrap {
  position: relative;
  width: 240px;
  height: 240px;
  margin-inline: auto; /* reste centré */
  border-radius: 50%;
}
.avatar-wrap::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 6px; /* épaisseur du cadre */
  background: conic-gradient(
    #42b883 0deg 120deg,
    #ff2d20 120deg 240deg,
    #42b883 240deg 360deg
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; /* garde seulement l’anneau */
  mask-composite: exclude;
  animation: borderSpin 4s linear infinite;
}

/* ----- Image ----- */
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

/* ----- Animation ----- */
@keyframes borderSpin {
  to {
    transform: rotate(1turn);
  }
}
</style>
