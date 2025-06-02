<script setup>
const props = defineProps({
  label: String,
  icon: String,
  color: String,
});
</script>

<template>
  <div class="card">
    <div class="icon-wrap" :style="{ background: color + '20', borderColor: color }">
      <img :src="icon" :alt="label" class="icon" />
    </div>

    <h3 class="label">{{ label }}</h3>
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

.label { margin: 0; font-weight: 600; color: #0f172a }
</style>
