<!-- SkillsSection.vue -->
<script setup>
import SkillCard from '@/components/SkillBar.vue'

import phpIcon            from '@/assets/icons/php.svg'
import laravelIcon        from '@/assets/icons/laravel.svg'
import novaIcon           from '@/assets/icons/laravelnova.svg'
import horizonIcon        from '@/assets/icons/laravelhorizon.svg'
import livewireIcon       from '@/assets/icons/livewire.svg'
import inertiaIcon        from '@/assets/icons/inertia.svg'
import dockerIcon         from '@/assets/icons/docker.svg'
import tsnodeIcon         from '@/assets/icons/tsnode.svg'
import vueIcon            from '@/assets/icons/vuedotjs.svg'
import tailwindIcon       from '@/assets/icons/tailwindcss.svg'
import bootstrapIcon      from '@/assets/icons/bootstrap.svg'
import filamentIcon       from '@/assets/icons/filament.svg'
import wordpressIcon      from '@/assets/icons/wordpress.svg'

const skills = [
  { label: 'PHP',             level: 5, icon: phpIcon,      color: '#777bb4' },
  { label: 'Laravel',         level: 5, icon: laravelIcon,  color: '#FF2D20' },
  { label: 'Laravel Nova',    level: 4, icon: novaIcon,     color: '#3d4852' },
  { label: 'Laravel Horizon', level: 4, icon: horizonIcon,  color: '#FF4E36' },
  { label: 'Livewire',        level: 4, icon: livewireIcon, color: '#4EBFED' },
  { label: 'Inertia.js',      level: 4, icon: inertiaIcon,  color: '#8030c0' },
  { label: 'Docker',          level: 4, icon: dockerIcon,   color: '#2496ed' },
  { label: 'TypeScript',      level: 3, icon: tsnodeIcon,   color: '#3178C6' },
  { label: 'Vue.js',          level: 4, icon: vueIcon,      color: '#42b883' },
  { label: 'Tailwind CSS',    level: 4, icon: tailwindIcon, color: '#38bdf8' },
  { label: 'Bootstrap',       level: 3, icon: bootstrapIcon,color: '#7952b3' },
  { label: 'Filament PHP',    level: 3, icon: filamentIcon, color: '#f46b45' },
  { label: 'WordPress',       level: 3, icon: wordpressIcon,color: '#21759b' },
]
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="heading">Compétences</h2>

      <div class="grid">
        <SkillCard
          v-for="s in skills"
          :key="s.label"
          v-bind="s"        
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills    { padding: 80px 0 }
.container { max-width: 1000px; margin: 0 auto; padding: 0 24px }
.heading   { font-size: 2rem; font-weight: 700; margin-bottom: 48px; color: #0f172a; text-align: center }

.grid {
  display: grid;
  gap: 24px;                            /* écart un peu plus serré */
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  align-items: start;                   /* aligne proprement les cartes */
}

/* ≥ 768 px : exactement 3 colonnes */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* < 600 px : 2 colonnes  */
@media (max-width: 599px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* < 400 px : 1 colonne  */
@media (max-width: 399px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
