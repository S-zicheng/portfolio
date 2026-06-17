<script setup>
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title">关于我</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            你好！我是一名热爱创造的前端开发者。我相信好的设计不仅仅是好看，
            更是让用户在使用时感到舒适和高效。
          </p>
          <p>
            专注于构建响应式、高性能的 Web 应用，擅长 Vue 生态和现代 CSS。
            持续学习，保持对新技术的好奇心。
          </p>
        </div>
        <div class="about-stats">
          <div class="stat">
            <span class="stat-number">1+</span>
            <span class="stat-label">年经验</span>
          </div>
          <div class="stat">
            <span class="stat-number">20+</span>
            <span class="stat-label">项目</span>
          </div>
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">客户</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #f8fafc;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  color: #475569;
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 0 0 1rem;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat {
  text-align: center;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.95rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .stat {
    padding: 1.5rem 0.5rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
