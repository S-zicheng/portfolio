<script setup>
import { ref } from 'vue'

const apiUrl = import.meta.env.VITE_REPORT_API_URL || 'https://api.szc-fty.cn/generate_report'

const file = ref(null)
const previewUrl = ref('')
const loading = ref(false)
const error = ref('')
const report = ref('')

function onFileChange(event) {
  const selected = event.target.files?.[0]
  file.value = selected || null
  report.value = ''
  error.value = ''

  if (!selected) {
    previewUrl.value = ''
    return
  }

  if (!selected.type.startsWith('image/')) {
    error.value = '请选择图片文件'
    file.value = null
    previewUrl.value = ''
    return
  }

  previewUrl.value = URL.createObjectURL(selected)
}

async function submit() {
  if (!file.value) {
    error.value = '请先选择一张胸片图片'
    return
  }

  loading.value = true
  error.value = ''
  report.value = ''

  try {
    const form = new FormData()
    form.append('image', file.value)

    const res = await fetch(apiUrl, {
      method: 'POST',
      body: form,
    })

    if (!res.ok) {
      throw new Error(`请求失败：${res.status}`)
    }

    const data = await res.json()
    report.value = data.report || data.message || '未能获取报告'
  } catch (err) {
    error.value = err.message || '生成报告失败，请稍后重试'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="report-demo" class="section report-demo">
    <div class="container">
      <h2 class="section-title">医学影像报告生成演示</h2>
      <p class="report-subtitle">
        上传一张胸部 X 光片，系统会结合知识图谱生成结构化报告。
      </p>

      <div class="report-panel">
        <div class="report-upload">
          <label class="upload-area" :class="{ 'has-image': previewUrl }">
            <input
              type="file"
              accept="image/*"
              class="file-input"
              @change="onFileChange"
            />
            <img v-if="previewUrl" :src="previewUrl" alt="胸片预览" class="preview-image" />
            <span v-else class="upload-placeholder">
              点击选择胸片图片
            </span>
          </label>

          <button
            type="button"
            class="submit-button"
            :disabled="loading || !file"
            @click="submit"
          >
            {{ loading ? '生成中...' : '生成报告' }}
          </button>
        </div>

        <div class="report-result">
          <p v-if="error" class="error-text">{{ error }}</p>
          <pre v-else-if="report" class="report-text">{{ report }}</pre>
          <p v-else class="result-placeholder">生成结果会显示在这里</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.report-demo {
  background: #f8fafc;
}

.report-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1.05rem;
  margin: -1rem 0 3rem;
}

.report-panel {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.report-upload {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.upload-area {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  background: #fff;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.upload-area:hover,
.upload-area.has-image {
  border-color: #4f46e5;
}

.file-input {
  display: none;
}

.upload-placeholder {
  color: #64748b;
  font-size: 0.95rem;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.submit-button {
  padding: 0.8rem 1.5rem;
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  background: #6366f1;
  transform: translateY(-1px);
}

.submit-button:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}

.report-result {
  min-height: 260px;
  padding: 1.5rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: auto;
}

.report-text {
  margin: 0;
  color: #1e293b;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  white-space: pre-wrap;
}

.result-placeholder,
.error-text {
  color: #94a3b8;
  font-size: 0.95rem;
}

.error-text {
  color: #dc2626;
}

@media (max-width: 768px) {
  .report-panel {
    grid-template-columns: 1fr;
  }
}
</style>
