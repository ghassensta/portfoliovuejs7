<!-- HeroSection.vue -->
<template>
  <section class="hero">
    <!-- Filtre sombre + couleur d’accent -->
    <div class="overlay"></div>

    <!-- Contenu -->
    <div class="inner">
      <h1 class="title">Concevez des back-ends<br />robustes & scalables</h1>
      <p class="subtitle">
        Backend Engineer &amp; Formateur Laravel — j’aide les équipes à passer
        de l’idée au produit avec performance et sécurité.
      </p>

      <div class="cta-group">
        <a href="#work"     class="btn btn-primary">Voir mes projets</a>
        <a href="#contact"  class="btn btn-ghost">Me contacter</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Section pleine hauteur ---------- */
.hero {
  position: relative;
  height: 100vh;                 /* occupe toute la fenêtre */
  background: url('@/assets/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

/* ---------- Voile sombre + dégradé ---------- */
.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.65));
}

/* ---------- Zone de texte ---------- */
.inner {
  position: relative;            /* au-dessus du voile */
  padding: 0 24px;
  max-width: 840px;
}

/* Titres */
.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 24px;
}
.subtitle {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 400;
  margin-bottom: 40px;
  color: #f1f1f1;
}

/* ---------- Boutons ---------- */
.cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 40px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* style principal */
.btn-primary {
  background: #b38b58;
  color: #fff;
}
.btn-primary:hover {
  background: #a27942;
}

/* style fantôme */
.btn-ghost {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* ---------- Responsive < 600 px ---------- */
@media (max-width: 599px) {
  .cta-group {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
