<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <SiteFooter />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
