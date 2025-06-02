<!-- ProjectsSection.vue -->
<script setup>
/* ─── Liste de projets (tu peux la déplacer dans un fichier data.js) ─── */
import fiollaImg from "../../assets/projects/fiollahome-website.jpg";
import parkinnImg from "../../assets/projects/parkinn.png";
import lannuairebtpImg from "../../assets/projects/lannuairebtp.png";

const projects = [
  {
    name: "Fiolla Home E-commerce",
    img: fiollaImg,
    stack: "· Shopify · css liquid ",
    live: "https://fiollahome.com"
  },
  {
    name: "Parkinn",
    img: parkinnImg,
    stack: "· Laravel · Redis · Blade · Livewire · docker",
    live: null,
    live: "https://v1.parkinnservice.com/"
  },
  {
    name: "Annuaire BTP",
    img: lannuairebtpImg,
    stack: "Laravel · Socket.io · DataTable.js · Docker",
    live: "https://lannuairebtp.fr/"
  },


  /* … ajoute autant de projets que tu veux … */
];
</script>

<template>
  <section id="work" class="projects">
    <div class="container">
      <h2 class="heading">Projets</h2>

      <div class="grid">
        <div v-for="p in projects" :key="p.name" class="card">
          <img :src="p.img" :alt="p.name" class="thumb" />

          <!-- Overlay info -->
          <div class="overlay">
            <h3 class="title">{{ p.name }}</h3>
            <p class="stack">{{ p.stack }}</p>

            <div class="btns">
              <a v-if="p.live" :href="p.live" class="btn" target="_blank">Live</a>
              <a v-if="p.repo" :href="p.repo" class="btn ghost" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* -------- Section -------- */
.projects {
  padding: 80px 0;
  background: #fff;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: #0f172a;
  text-align: center;
}

/* -------- Grille -------- */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

/* -------- Carte -------- */
.card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.thumb {
  width: 100%;
  height: 220px;
  object-fit: contain;
  transition: transform 0.35s ease;
}
.card:hover .thumb {
  transform: scale(1.05);
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}
.card:hover .overlay {
  opacity: 1;
}

/* Texte */
.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.stack {
  font-size: 0.95rem;
  margin-bottom: 20px;
  color: #d1d5db;
}

/* Boutons */
.btn {
  display: inline-block;
  padding: 10px 24px;
  margin: 0 6px;
  border-radius: 32px;
  font-weight: 600;
  background: #0f172ade;
  color: #fff;
  text-decoration: none;
  transition: background 0.25s;
}
.btn:hover {
  background: #0f172ade;
}
.btn.ghost {
  background: transparent;
  border: 2px solid #fff;
}
.btn.ghost:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* -------- Responsive hauteur mobile -------- */
@media (max-width: 599px) {
  .thumb {
    height: 180px;
  }
}
</style>
