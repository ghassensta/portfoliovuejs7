<!-- ExperienceSection.vue -->
<template>
  <section id="exp" class="experience">
    <div class="container">
      <h2 class="heading">Expérience</h2>

      <ul class="timeline">
        <!-- ÉLÉMENT 1 -->
        <li class="item">
          <span class="point"></span>
          <div class="card">
            <h3 class="role">Laravel &amp; Vue.js&nbsp;Developer</h3>
            <p class="company">Troisweb • 2024&nbsp;– Aujourd’hui</p>
            <ul class="tasks">
              <li>Conception d’un CRM modulaire (Gestionglass, Casa&nbsp;Lux).</li>
              <li>CI / CD GitHub Actions + déploiement WinSCP.</li>
              <li>Intégration Viva Wallet &amp; Livewire devis dynamiques.</li>
            </ul>
          </div>
        </li>

        <!-- ÉLÉMENT 2 -->
        <li class="item">
          <span class="point"></span>
          <div class="card">
            <h3 class="role">Backend&nbsp;Engineer Freelance</h3>
            <p class="company">Clients divers • 2021&nbsp;– 2023</p>
            <ul class="tasks">
              <li>Création d’APIs REST sécurisées (Laravel + Sanctum).</li>
              <li>Migration bases MySQL → PostgreSQL, optimisation requêtes.</li>
              <li>Déploiement Docker Swarm &amp; monitoring Prometheus.</li>
            </ul>
          </div>
        </li>

        <!-- ÉLÉMENT 3 -->
        <li class="item">
          <span class="point"></span>
          <div class="card">
            <h3 class="role">Stagiaire&nbsp;DevOps</h3>
            <p class="company">TechCorp • 2020</p>
            <ul class="tasks">
              <li>Automatisation pipelines CI GitLab CI / CD.</li>
              <li>Écriture de tests de charge (k6) et tuning Nginx.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* -------- Section -------- */
.experience {
  padding: 80px 0;
  background: #f8fafc;                       /* même gris léger que About */
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}

/* -------- Titre -------- */
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: #0f172a;
  text-align: center;
}

/* -------- Timeline -------- */
.timeline {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
}
.timeline::before {                          /* ligne verticale */
  content: '';
  position: absolute;
  left: 20px;                                /* aligne les points */
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

/* -------- Élément -------- */
.item {
  position: relative;
  padding-left: 60px;                        /* place la carte à droite du point */
  margin-bottom: 40px;
}
.point {
  position: absolute;
  left: 11px;
  top: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #b38b58;                       /* accent doré */
  border: 4px solid #fff;
  box-shadow: 0 0 0 2px #e2e8f0;
}

/* -------- Carte -------- */
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  padding: 24px;
}
.role {
  margin: 0 0 4px;
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
}
.company {
  margin: 0 0 16px;
  font-size: .95rem;
  color: #6b7280;
}
.tasks {
  margin: 0;
  padding-left: 18px;
  line-height: 1.5;
}

/* -------- Responsive ≥ 768 px -------- */
@media (min-width: 768px) {
  .timeline::before { left: 50%; }           /* ligne au centre */
  .item {
    display: flex;
    width: 50%;
    padding-left: 0;
  }
  .item:nth-child(odd) {
    flex-direction: row-reverse;
    margin-left: 50%;
    text-align: left;
  }
  .item:nth-child(even) {
    margin-right: 50%;
    text-align: right;
  }
  .item .point {
    left: calc(50% - 9px);
  }
  .item .card {
    width: 100%;
  }
}
</style>
