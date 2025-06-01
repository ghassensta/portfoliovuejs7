<!-- MainNavbar.vue -->
<script setup>
import { ref } from "vue";
const open = ref(false); // état du menu mobile

function toggle() {
  open.value = !open.value;
}
function close() {
  open.value = false;
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->

      <a href="#hero" class="logo" @click="close">
        <!-- remplace /logo.svg par le tien (taille originale ~ 120 × 40) -->
        <img src="../../src/assets/img/logo-portfolio.png" alt="Ghassen Sta" class="logo-img" />
        <span class="logo-text">Ghassen Sta</span>
      </a>
      <!-- Burger (mobile) -->
      <button class="burger" @click="toggle" aria-label="Ouvrir/fermer le menu">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
        >
          <path
            v-if="!open"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 6h18M3 12h18M3 18h18"
          />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Liens -->
      <ul :class="['nav-links', open && 'open']">
        <li>
          <a href="#about" class="navlink" @click="close">À-propos</a>
        </li>
        <li>
          <a href="#skills" class="navlink" @click="close">Compétences</a>
        </li>
        <li>
          <a href="#exp" class="navlink" @click="close">Expérience</a>
        </li>
        <li>
          <a href="#work" class="navlink" @click="close">Projets</a>
        </li>
        <li>
          <a href="#contact" class="navlink" @click="close">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* ---------- Barre fixe translucide + flou ---------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.986);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* ---------- Conteneur ---------- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ---------- Logo ---------- */
.logo {
  display: flex;
  align-items: center;
  gap: 10px; /* petit espace */
  text-decoration: none;
}
.logo-img {
  height: 40px; /* ajuste selon ton SVG / PNG */
  width: auto;
}
.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
}

/* ---------- Burger ---------- */
.burger {
  display: none; /* caché desktop */
  background: none;
  border: none;
  cursor: pointer;
  color: #0f172a;
}

/* ---------- Liens ---------- */
.nav-links {
  display: flex;
  gap: 24px; /* layout desktop */
  list-style: none;
  margin: 0;
  padding: 0;
}

.navlink {
  position: relative;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
}
.navlink:hover,
.navlink:focus {
  color: #0f172a;
}
.navlink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #0f172a;
  transition: width 0.3s;
}
.navlink:hover::after,
.navlink:focus::after {
  width: 100%;
}

/* ---------- Breakpoint <768 px ---------- */
@media (max-width: 767px) {
  .burger {
    display: block;
  } /* montrer le burger */

  /* nav-links passent en menu déroulant */
  .nav-links {
    position: absolute;
    top: 64px;
    right: 0;
    left: 0;
    flex-direction: column;
    gap: 16px;
    background: #ffffff;
    padding: 16px 24px;
    display: none; /* fermé par défaut */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
  .nav-links.open {
    display: flex;
  } /* ouvert */
}
</style>
