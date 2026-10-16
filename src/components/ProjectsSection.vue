<script setup>
const projects = [
  {
    title: '基于知识图谱与视觉反馈的影像报告生成系统',
    desc: '面向胸部 X 光影像的智能报告生成系统。从放射学知识图谱动态检索匹配知识子图并注入视觉语言模型，通过生成器-验证器博弈解码迭代优化候选报告，结合视觉扰动检测幻觉并自适应反馈调参，输出带置信度的结构化医学报告。',
    tags: ['Vue 3', '视觉语言模型', '知识图谱', '医学影像'],
    link: '#report-demo'
  },
  {
    title: '后台管理系统',
    desc: '企业级后台管理系统，提供用户管理、角色权限、数据统计与系统配置等功能，支持多角色协作。',
    tags: ['Vue 3', 'Element Plus', 'Pinia', 'ECharts'],
    link: '#'
  },
  {
    title: '数据可视化大屏',
    desc: '基于 ECharts 与 DataV 的数据可视化大屏，实时展示核心业务指标、趋势图表与区域分布，支持动态刷新。',
    tags: ['Vue 2', 'ECharts', 'DataV', 'Vuex'],
    link: '#'
  },
  {
    title: '微信点单小程序',
    desc: '微信小程序线上点单系统，支持扫码点单、购物车、订单管理与在线支付。',
    tags: ['微信小程序', 'uni-app', '云开发'],
    link: '#'
  }
]
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title">我的作品</h2>
      <p class="section-subtitle">一些我参与或主导开发的项目</p>
      <div class="projects-grid">
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link"
          class="project-card"
        >
          <div class="project-card-header">
            <div class="project-icon">{{ project.title.charAt(0) }}</div>
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.desc }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: #fff;
}

.section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1.05rem;
  margin: -1rem 0 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.project-card {
  display: block;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.75rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.project-card:hover {
  border-color: #818cf8;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);
  transform: translateY(-2px);
}

.project-card-header {
  margin-bottom: 1rem;
}

.project-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef2ff;
  color: #4f46e5;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: 700;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.project-desc {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: #eef2ff;
  color: #4f46e5;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
