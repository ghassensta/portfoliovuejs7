
<!-- MainFooter.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <!-- Col 1 : logo + pitch -->
      <div class="col logo-col">
        <h3 class="brand">Ghassen&nbsp;Sta</h3>
        <p class="pitch">
          Backend&nbsp;Engineer &amp; formateur Laravel.<br/>
          J’aide les équipes à construire des applications
          robustes, scalables et performantes.
        </p>
      </div>

      <!-- Col 2 : navigation rapide -->
      <div class="col">
        <h4>Navigation</h4>
        <ul class="links">
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#about">À&nbsp;propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#work">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <!-- Col 3 : services -->
      <div class="col">
        <h4>Services</h4>
        <ul class="links">
          <li>Développement&nbsp;Laravel</li>
          <li>Architectures&nbsp;API</li>
          <li>CI&nbsp;/&nbsp;CD &amp; Docker</li>
          <li>Audit performance</li>
        </ul>
      </div>

      <!-- Col 4 : contact & réseaux -->
      <div class="col">
        <h4>Contact</h4>
        <p class="contact">
          Tunis, Tunisie<br/>
          <a href="mailto:contact@fiollahome.com">contact@fiollahome.com</a>
        </p>
        <ul class="social">
          <li><a href="https://github.com/ghassensta" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/ghassensta" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com/ghassensta" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </div>

    <div class="bottom">
      © {{ new Date().getFullYear() }} Ghassen Sta — Tous droits réservés.
    </div>
  </footer>
</template>

<style scoped>
/* -------- Basique -------- */
.footer{
  background:#0f172a;           /* gris‐bleu très foncé */
  color:#e5e7eb;                /* gris clair */
  font-size:.95rem;
}
.container{
  max-width:1200px;
  margin:0 auto;
  padding:60px 24px;
  display:grid;
  grid-template-columns:1fr;
  grid-gap:40px;
}
h3.brand{
  margin:0 0 12px;
  color:#fff;
  font-size:1.4rem;
  font-weight:700;
}
h4{
  margin:0 0 16px;
  color:#fff;
  font-size:1.1rem;
}
.pitch{margin:0; line-height:1.5; color:#cbd5e1;}
.links{list-style:none; padding:0; margin:0;}
.links li{margin-bottom:8px;}
.links a{color:#e5e7eb; text-decoration:none;}
.links a:hover{text-decoration:underline;}
.contact a{color:#0f172ade; text-decoration:none;}
.contact a:hover{text-decoration:underline;}
.social{list-style:none; padding:0; margin:16px 0 0;}
.social li{display:inline-block; margin-right:12px;}
.social a{color:#e5e7eb; text-decoration:none;}
.social a:hover{color:#0f172ade;}
/* -------- Ligne bas de page -------- */
.bottom{
  background:#0d1320;
  text-align:center;
  padding:18px 12px;
  font-size:.85rem;
  color:#9ca3af;
}
/* -------- ≥ 768 px : 4 colonnes -------- */
@media(min-width:768px){
  .container{grid-template-columns:repeat(4,1fr);}
  .logo-col{grid-column:span 2;}          /* logo + pitch un peu plus large */
}
</style>
