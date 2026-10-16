<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-name">舍子成</h1>
      <p class="hero-title">前端开发者 / 设计师</p>
      <p class="hero-tagline">用代码创造有温度的体验</p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">查看作品</a>
        <a href="#contact" class="btn btn-outline">联系我</a>
      </div>
    </div>
    <div class="scroll-hint">
      <span>向下滚动</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  color: #f1f5f9;
}

.hero-content {
  max-width: 640px;
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.hero-title {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #818cf8;
  margin: 0 0 1rem;
  font-weight: 500;
}

.hero-tagline {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #94a3b8;
  margin: 0 0 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary {
  background: #4f46e5;
  color: #fff;
  border: 2px solid #4f46e5;
}

.btn-primary:hover {
  background: #6366f1;
  border-color: #6366f1;
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: #f1f5f9;
  border: 2px solid #475569;
}

.btn-outline:hover {
  border-color: #818cf8;
  color: #818cf8;
  transform: translateY(-1px);
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.85rem;
  animation: float 2s ease-in-out infinite;
}

.scroll-arrow {
  width: 1.5rem;
  height: 1.5rem;
  border-right: 2px solid #64748b;
  border-bottom: 2px solid #64748b;
  transform: rotate(45deg);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
</style>
