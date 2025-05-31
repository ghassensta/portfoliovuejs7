<script setup>
import { ref } from 'vue';
const open = ref(false);
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur shadow">
    <div class="container mx-auto flex items-center justify-between px-6 py-3">

      <!-- Logo -->
      <a href="#hero" class="text-xl font-bold">Ghassen Sta</a>

      <!-- Burger (mobile) -->
      <button @click="open = !open" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!open"  stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Liens desktop -->
      <ul class="hidden md:flex gap-6">
        <li><a href="#about"    class="navlink">À-propos</a></li>
        <li><a href="#skills"   class="navlink">Compétences</a></li>
        <li><a href="#exp"      class="navlink">Expérience</a></li>
        <li><a href="#work"     class="navlink">Projets</a></li>
        <li><a href="#contact"  class="navlink">Contact</a></li>
      </ul>
    </div>

    <!-- Menu mobile déroulant -->
    <ul v-if="open"
        class="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white shadow-inner">
      <li><a href="#about"    class="navlink" @click="open=false">À-propos</a></li>
      <li><a href="#skills"   class="navlink" @click="open=false">Compétences</a></li>
      <li><a href="#exp"      class="navlink" @click="open=false">Expérience</a></li>
      <li><a href="#work"     class="navlink" @click="open=false">Projets</a></li>
      <li><a href="#contact"  class="navlink" @click="open=false">Contact</a></li>
    </ul>
  </nav>
</template>
