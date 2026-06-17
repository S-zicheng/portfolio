<script setup>
const skillGroups = [
  {
    category: '前端',
    skills: ['HTML / CSS', 'JavaScript', 'Vue 3', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: '后端 / 工具',
    skills: ['Node.js', 'Express', 'Git', 'Docker', 'PostgreSQL', 'Firebase']
  },
  {
    category: '设计',
    skills: ['Figma', 'UI/UX 设计', '响应式设计', '设计系统']
  }
]
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <h2 class="section-title">技能</h2>
      <div class="skills-grid">
        <div
          v-for="group in skillGroups"
          :key="group.category"
          class="skill-group"
        >
          <h3 class="skill-category">{{ group.category }}</h3>
          <div class="skill-tags">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="skill-tag"
            >{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background: #f8fafc;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.skill-group {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}

.skill-category {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #eef2ff;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.35rem 0.85rem;
  background: #f1f5f9;
  color: #475569;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.15s ease;
}

.skill-tag:hover {
  background: #eef2ff;
  color: #4f46e5;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
