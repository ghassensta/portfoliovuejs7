<!-- SkillsSection.vue -->
<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="heading">Compétences</h2>

      <div class="grid">
        <SkillBar label="PHP / Laravel"  :level="90" />
        <SkillBar label="Node.js"        :level="75" />
        <SkillBar label="Docker & CI/CD" :level="80" />
        <SkillBar label="PostgreSQL"     :level="85" />
        <SkillBar label="Vue.js / React" :level="70" />
        <SkillBar label="AWS"            :level="60" />
      </div>
    </div>
  </section>
</template>

<script setup>
/* ────── Sous-composant barre ────── */
defineProps([]); // (pas de props pour la section)

// Composant enfant inline :
const SkillBar = {
  props: { label: String, level: Number }, // level = 0-100
  template: `
    <div class="skill">
      <div class="skill-header">
        <span>{{ label }}</span>
        <span>{{ level }}%</span>
      </div>
      <div class="bar-bg">
        <div class="bar-fill" :style="{ width: level + '%' }"></div>
      </div>
    </div>
  `,
};
</script>

<style scoped>
/* ---------- Section ---------- */
.skills{
  padding:80px 0;
}
.container{
  max-width:1000px;
  margin:0 auto;
  padding:0 24px;
}

/* ---------- Titre ---------- */
.heading{
  font-size:2rem;
  font-weight:700;
  margin-bottom:48px;
  color:#0f172a;
  text-align:center;
}

/* ---------- Grille ---------- */
.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:32px;
}
@media(max-width:799px){
  .grid{ grid-template-columns:1fr; }
}

/* ---------- Barres ---------- */
.skill-header{
  display:flex; justify-content:space-between;
  font-weight:600; color:#0f172a;
  margin-bottom:6px;
}
.bar-bg{
  height:10px;
  background:#e5e7eb;            /* gris clair */
  border-radius:5px;
  overflow:hidden;
}
.bar-fill{
  height:100%;
  background:#b38b58;            /* accent */
  width:0;                       /* animé ci-dessous */
  transition:width 1s ease;
}
</style>
