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
            <h3 class="role">Web Developer</h3>
            <p class="company">TriosWeb • Mars 2024 – Aujourd’hui</p>
            <ul class="tasks">
              <li>Conception et maintien d’un CRM modulaire (Gestionglass, Casa Lux).</li>
              <li>Intégration d’une pipeline CI /CD avec GitHub Actions et déploiement via WinSCP.</li>
              <li>Implémentation de fonctionnalités dynamiques (Livewire) : devis, gestion client, facturation.</li>
            </ul>
          </div>
        </li>

        <!-- ÉLÉMENT 2 -->
        <li class="item">
          <span class="point"></span>
          <div class="card">
            <h3 class="role">Stagiaire Front & Back (PFE)</h3>
            <p class="company">Ikaredoc • Fév 2023 – Mai 2023</p>
            <ul class="tasks">
              <li>Développement d’une application de gestion de chantiers pour Designet Web Agency :</li>
              <ul>
                <li>Technos : PHP, JavaScript, Tailwind CSS, Laravel, Livewire, Filament, AJAX, jQuery, MySQL.</li>
                <li>Fonctionnalités : suivi d’inventaire, supervision des employés, CRM interne.</li>
                <li>Versionning et collaboration sur GitHub pour assurer la qualité du code.</li>
              </ul>
            </ul>
          </div>
        </li>

        <!-- ÉLÉMENT 3 -->
        <li class="item">
          <span class="point"></span>
          <div class="card">
            <h3 class="role">Stagiaire Développeur Web</h3>
            <p class="company">Designet Web Agency • Nov 2023 – Jan 2023</p>
            <ul class="tasks">
              <li>Participation à l’amélioration d’un site existant en Laravel & Vue JS.</li>
              <li>Création de composants Vue JS, intégration de formulaires dynamiques avec AJAX.</li>
              <li>Optimisation des requêtes MySQL et mise en place de migrations Laravel.</li>
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
  background: #f8fafc; /* même gris léger que About */
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
.timeline::before { /* ligne verticale */
  content: '';
  position: absolute;
  left: 20px; /* aligne les points */
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

/* -------- Élément -------- */
.item {
  position: relative;
  padding-left: 60px; /* place la carte à droite du point */
  margin-bottom: 40px;
}
.point {
  position: absolute;
  left: 11px;
  top: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background:#0f172a; /* or doré */
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
.tasks ul {
  list-style: disc;
  margin: 8px 0 0 24px;
  padding: 0;
}

/* -------- Responsive ≥ 768 px -------- */
@media (min-width: 768px) {
  .timeline::before { left: 50%; } /* ligne au centre */
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
