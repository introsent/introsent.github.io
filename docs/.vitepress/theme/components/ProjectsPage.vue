<template>
  <div class="pf pj">
    <header class="pj-header">
      <p class="pf-label"><a class="crumb" href="/">Home</a> / Projects</p>
      <h1 class="pf-h1 pj-title">Projects</h1>
      <p class="pf-lead pj-lead">
        Client work first, then the renderers, engines and physics projects I built myself.
        Each page explains how the thing works and what I learned building it.
      </p>
    </header>

    <!-- Client work -->
    <section class="pj-group">
      <h2 class="pf-label pf-label--accent pj-group-title">Client work</h2>
      <a class="client" href="/career/forefront">
        <div class="client-media">
          <img src="/images/posters/forefront.webp" alt="" width="1280" height="720" loading="lazy" decoding="async" />
        </div>
        <div class="client-body">
          <div class="pf-label">Triangle Factory · Unity · VR · The Game Awards 2026 nominee</div>
          <h3 class="pf-h2 client-title">Forefront</h3>
          <p class="pf-text">
            Memory and GPU optimization for a 32-player VR shooter on standalone headsets: duplicate font and texture removal,
            build-time checks, memory stripping, GPU-driven far-scenery batching, plus player-facing features.
          </p>
          <span class="pf-link client-more">Read the case study</span>
        </div>
      </a>
    </section>

    <!-- Own projects by group -->
    <section v-for="g in groups" :key="g" class="pj-group">
      <h2 class="pf-label pf-label--accent pj-group-title">{{ g }}</h2>
      <div class="pj-grid">
        <work-card v-for="p in projects.filter((x) => x.group === g)" :key="p.id" :project="p" />
      </div>
    </section>

    <!-- 3D model (kept from the previous version, loads only when scrolled to) -->
    <section class="pj-group">
      <h2 class="pf-label pf-label--accent pj-group-title">3D model</h2>
      <div class="sketchfab">
        <iframe
            title="3D model on Sketchfab"
            src="https://sketchfab.com/models/29c270eff3c44df5ab2db695dde6022f/embed"
            loading="lazy"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects, groups } from '../data/projects.js'
import WorkCard from './WorkCard.vue'
</script>

<style scoped>
.pj {
  padding-top: 56px;
}

@media (min-width: 960px) {
  .pj {
    padding-top: 80px;
  }
}

.crumb {
  color: inherit;
  text-decoration: none;
}

.crumb:hover {
  color: var(--vp-c-brand-1);
}

.pj-title {
  margin-top: 16px;
}

.pj-lead {
  margin-top: 20px;
}

.pj-group {
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.pj-group-title {
  margin: 0 0 24px;
  font-weight: 400;
}

.pj-grid {
  display: grid;
  gap: 40px 32px;
}

@media (min-width: 720px) {
  .pj-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1100px) {
  .pj-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.client {
  display: grid;
  gap: 24px;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-left: 2px solid var(--vp-c-brand-1);
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg-soft);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.15s;
}

.client:hover {
  border-color: var(--vp-c-border);
  border-left-color: var(--vp-c-brand-1);
}

.client-media {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 4px;
  background: var(--vp-c-bg);
}

.client-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 860px) {
  .client {
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    gap: 32px;
  }
}

.client-title {
  margin: 8px 0 12px;
}

.client-more {
  display: inline-block;
  margin-top: 16px;
}

.sketchfab {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg-soft);
}

.sketchfab iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
