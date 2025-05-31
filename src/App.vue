<script setup>
import MainNavbar from './components/MainNavbar.vue';
import HeroSection        from './components/sections/HeroSection.vue';
import AboutSection       from './components/sections/AboutSection.vue';
import SkillsSection      from './components/sections/SkillsSection.vue';
import ExperienceSection  from './components/sections/ExperienceSection.vue';
import ProjectsSection    from './components/sections/ProjectsSection.vue';
import ContactSection     from './components/sections/ContactSection.vue';
</script>

<template>
  <div class="font-sans text-gray-800 scroll-smooth">
    <!-- Barre de navigation fixe -->
    <MainNavbar />

    <!-- Sections -->
    <HeroSection        id="hero"     />
    <AboutSection       id="about"    class="py-20 bg-slate-50" />
    <SkillsSection      id="skills"   class="py-20" />
    <ExperienceSection  id="exp"      class="py-20 bg-slate-50" />
    <ProjectsSection    id="work"     class="py-20" />
    <ContactSection     id="contact"  class="py-20 bg-slate-50" />

    <!-- Pied de page -->
    <MainFooter />
  </div>
</template>
