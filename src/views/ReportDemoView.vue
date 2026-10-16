<script setup>
import ReportDemoSection from '../components/ReportDemoSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <div class="report-demo-page">
    <nav class="demo-nav">
      <div class="container nav-inner">
        <router-link to="/" class="back-link">返回首页</router-link>
      </div>
    </nav>
    <ReportDemoSection />
    <SiteFooter />
  </div>
</template>

<style scoped>
.report-demo-page {
  min-height: 100vh;
}

.demo-nav {
  background: #0f172a;
  padding: 1rem 0;
}

.nav-inner {
  display: flex;
  align-items: center;
}

.back-link {
  color: #e2e8f0;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #818cf8;
}
</style>
