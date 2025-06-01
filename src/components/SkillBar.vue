<!-- components/SkillCard.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  label:  String,
  icon:   String,
  level:  Number,   // 1 – 5
  color:  String,
})

// tableau d’étoiles remplies / vides
const stars = computed(() => Array.from({ length: 5 }, (_, i) => i < props.level))
</script>

<template>
  <div class="card">
    <div class="icon-wrap" :style="{ background: color + '20', borderColor: color }">
      <img :src="icon" :alt="label" class="icon" />
    </div>

    <h3 class="label">{{ label }}</h3>

    <div class="stars">
      <svg
        v-for="(filled, i) in stars"
        :key="i"
        viewBox="0 0 20 20"
        class="star"
        :fill="filled ? color : 'none'"
        :stroke="color"
      >
        <polygon points="10,1 12.9,7.1 19.5,7.3 14,11.9 15.8,18.4 10,14.8 4.2,18.4 6,11.9 0.5,7.3 7.1,7.1" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  transition: transform .25s;
}
.card:hover { transform: translateY(-4px) }

.icon-wrap {
  width: 64px; height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  border: 2px solid;
  display: flex; align-items: center; justify-content: center;
}
.icon { width: 36px; height: 36px }

.label { margin: 0 0 12px; font-weight: 600; color: #0f172a }

.stars { display: flex; justify-content: center; gap: 2px }
.star { width: 18px; height: 18px }
</style>
