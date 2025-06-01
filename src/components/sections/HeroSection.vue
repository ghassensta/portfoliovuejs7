<!-- HeroSection.vue -->
<script setup>
import { ref, onMounted } from 'vue'

/* ===== Machine à écrire ===== */
const fullText = 'Software Engineer'
const typed    = ref('')
const cursor   = ref(true)

onMounted(() => {
  let i = 0
  const speed = 70
  const type = () => {
    if (i < fullText.length) {
      typed.value += fullText[i++]
      setTimeout(type, speed)
    } else {
      setInterval(() => (cursor.value = !cursor.value), 500)
    }
  }
  type()
})
</script>

<template>
  <section class="hero">
    <div class="inner">
      <h1 class="typing">
        {{ typed }}<span v-if="cursor" class="cursor">|</span>
      </h1>

      <p class="subtitle">
        Ingénieur logiciel spécialisé <strong>Laravel</strong> &amp; <strong>Vue.js</strong> —
        je transforme les idées en produits performants, sécurisés et scalables.
      </p>

      <div class="cta">
        <a href="#work"    class="btn btn-primary">Voir mes projets</a>
        <a href="#contact" class="btn btn-ghost">Me contacter</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Variables de couleur ---------- */
:root {
  --accent: #0f172a;   /* couleur existante */
  --white : #ffffff;
}

/* ===== Structure ===== */
.hero{
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  background:#0f172a;
  color:#ffffff;
}

.inner{ max-width:880px; padding:0 24px; }

/* ===== Typing ===== */
.typing{
  font-size:clamp(2.2rem,5vw,3.5rem);
  font-weight:800; line-height:1.2; margin:0 0 32px;
  white-space:pre; overflow:hidden;
}
.cursor{ animation:blink .9s steps(1) infinite; }
@keyframes blink{ 50%{opacity:0} }

/* ===== Sous-titre ===== */
.subtitle{
  font-size:clamp(1rem,2vw,1.3rem);
  margin-bottom:48px;
  color:#ffffff;
}

/* ===== Boutons ===== */
.cta{ display:flex; gap:18px; flex-wrap:wrap; justify-content:center;
      animation:slideIn 1.2s ease .8s both; }
@keyframes slideIn{ from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }

.btn{
  padding:14px 32px; border-radius:40px; font-weight:600; text-decoration:none;
  transition:transform .25s,box-shadow .25s, background .25s, color .25s;
}
.btn:hover{ transform:translateY(-3px); box-shadow:0 8px 16px rgba(0,0,0,.12); }

.btn-primary{
  background:#ffffff;             /* fond blanc */
  color:#0f172a;                 /* texte accent */
}
.btn-primary:hover{
  background:#e8e8e8;            /* inversion au hover */
  color:#0f172a;
}

.btn-ghost{
  background:transparent;
  border:2px solid #ffffff;
  color:#ffffff;
}
.btn-ghost:hover{
  background:#ffffff;             /* inversion au hover */
  color:#0f172a;
}

/* ===== Mobile ===== */
@media(max-width:599px){
  .cta{ flex-direction:column; gap:14px }
}
</style>
