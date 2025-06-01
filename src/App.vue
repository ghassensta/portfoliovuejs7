<script setup>
import MainNavbar from "./components/MainNavbar.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";
import ExperienceSection  from './components/sections/ExperienceSection.vue';
import ProjectsSection    from './components/sections/ProjectsSection.vue';
import ContactSection     from './components/sections/ContactSection.vue'; 
import MainFooter from "./components/MainFooter.vue";

</script>

<template>
  <div>
    <MainNavbar />
    <HeroSection id="hero" />
    <AboutSection id="about"  class="bg-light" />
    <SkillsSection id="skills" />
    <ExperienceSection id="exp" class="bg-light" />
    <ProjectsSection id="work" />
    <ContactSection id="contact" class="bg-light" />

    <MainFooter />
  </div>
</template>
