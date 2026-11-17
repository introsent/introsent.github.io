<template>
  <a
      class="wc"
      :href="project.link"
      @mouseenter="start"
      @mouseleave="stop"
      @focus="start"
      @blur="stop"
  >
    <div class="wc-media">
      <img
          :src="project.poster"
          alt=""
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
      />
      <!-- The clip is only mounted (and downloaded) while hovered -->
      <video
          v-if="project.preview && playing"
          :src="project.preview"
          muted
          loop
          playsinline
          autoplay
          preload="none"
          aria-hidden="true"
      />
    </div>
    <div class="wc-body">
      <h3 class="wc-title">
        {{ project.title }}
        <span class="wc-arrow" aria-hidden="true">→</span>
      </h3>
      <p class="wc-summary">{{ project.summary }}</p>
      <ul class="pf-tags">
        <li v-for="tag in project.tags" :key="tag" class="pf-tag">{{ tag }}</li>
      </ul>
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  project: { type: Object, required: true }
})

const playing = ref(false)

function start() {
  if (typeof window === 'undefined') return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const canHover = window.matchMedia('(hover: hover)').matches
  if (!reduced && canHover) playing.value = true
}

function stop() {
  playing.value = false
}
</script>

<style scoped>
.wc {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.wc-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg-soft);
}

.wc-media img,
.wc-media video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wc-body {
  padding-top: 14px;
}

.wc-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.wc-arrow {
  color: var(--vp-c-brand-1);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.15s, transform 0.15s;
}

.wc:hover .wc-arrow,
.wc:focus-visible .wc-arrow {
  opacity: 1;
  transform: none;
}

.wc:hover .wc-media,
.wc:focus-visible .wc-media {
  border-color: var(--vp-c-border);
}

.wc-summary {
  margin: 0 0 12px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
</style>
