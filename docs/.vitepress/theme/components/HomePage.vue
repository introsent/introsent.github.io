<template>
  <!-- Hero -->
  <section class="hero pf">
    <div class="hero-text">
      <p class="pf-label hero-status"><span class="status-mark" aria-hidden="true"></span>Available for freelance work · Riga, Latvia · remote</p>
      <h1 class="pf-h1">Memory, CPU and GPU optimization for games.</h1>
      <p class="pf-lead hero-lead">
        I'm Ivans Minajevs, a freelance graphics and optimization programmer. I work in C++ and C#, with Unity, Vulkan and DirectX.
        At Triangle Factory I worked on memory and GPU optimization for
        <a class="pf-link" href="/career/forefront">Forefront</a>, a 32-player VR shooter that also runs on standalone Meta Quest headsets,
        where both RAM and GPU time are tight.
      </p>
      <a class="pf-award hero-award" href="https://thegameawards.com/categories/best-vr-ar" target="_blank" rel="noopener">
        <strong>The Game Awards 2026</strong>
        <span>Forefront is nominated for Best VR/AR Game</span>
      </a>
      <div class="pf-actions">
        <a class="pf-btn" href="#contact">Tell me about your project</a>
        <a class="pf-btn pf-btn--ghost" href="/career/forefront">Forefront case study <span aria-hidden="true">→</span></a>
      </div>
    </div>

    <figure class="pf-frame hero-media">
      <video
          ref="heroVideo"
          poster="/images/posters/salamander.webp"
          muted
          loop
          playsinline
          preload="none"
          width="1280"
          height="720"
          aria-label="Sponza scene rendered in Salamander, my Vulkan renderer"
      >
        <source src="/videos/salamander-hero.mp4" type="video/mp4" />
      </video>
      <figcaption>
        <span>Salamander, my Vulkan renderer</span>
        <span>deferred · PBR · IBL · auto exposure</span>
      </figcaption>
    </figure>

    <dl class="facts">
      <div>
        <dt class="pf-label">Recent work</dt>
        <dd><a href="/career/forefront">Forefront</a>, Triangle Factory<span class="facts-note">The Game Awards 2026 nominee</span></dd>
      </div>
      <div>
        <dt class="pf-label">Focus</dt>
        <dd>Memory optimization, CPU and GPU performance, rendering</dd>
      </div>
      <div>
        <dt class="pf-label">Profilers</dt>
        <dd>RenderDoc, Nsight, Razor, OVR Metrics, Unity Profiler</dd>
      </div>
      <div>
        <dt class="pf-label">Languages</dt>
        <dd>C++, C#, HLSL, GLSL</dd>
      </div>
    </dl>
  </section>

  <!-- Services -->
  <section id="services" class="pf-section anchor">
    <div class="pf">
      <div class="pf-head">
        <span class="pf-label pf-label--accent">Services</span>
        <h2 class="pf-h2">What I can help with</h2>
      </div>

      <div class="pf-body">
        <aside class="budget" aria-label="Frame time and memory budgets on standalone VR">
          <div class="pf-label">Frame time</div>
          <div v-for="b in budgets" :key="b.label" class="budget-row">
            <span class="budget-hz">{{ b.label }}</span>
            <span class="budget-bar"><span :style="{ width: b.pct + '%' }"></span></span>
            <span class="budget-ms">{{ b.value }}</span>
          </div>
          <div class="pf-label budget-sub">Memory</div>
          <div v-for="m in memory" :key="m.label" class="budget-row">
            <span class="budget-hz">{{ m.label }}</span>
            <span class="budget-bar"><span :style="{ width: m.pct + '%' }"></span></span>
            <span class="budget-ms">{{ m.value }}</span>
          </div>
          <p class="budget-note">
            On a standalone headset that memory is shared by the OS, the CPU and the GPU.
            Run out of frame time and you drop frames. Run out of memory and the game gets closed.
          </p>
        </aside>

        <div>
          <ol class="services">
            <li v-for="(s, i) in services" :key="s.title" class="service">
              <span class="service-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div>
                <h3 class="pf-h3">{{ s.title }}</h3>
                <p class="pf-text service-text">{{ s.text }}</p>
                <p class="service-out"><span class="pf-label">You get</span> {{ s.out }}</p>
              </div>
            </li>
          </ol>

          <div class="steps">
            <div class="pf-label steps-label">How I work</div>
            <ol class="steps-list">
              <li v-for="(step, i) in steps" :key="step.title">
                <span class="step-num">{{ i + 1 }}</span>
                <strong>{{ step.title }}</strong>
                <span>{{ step.text }}</span>
              </li>
            </ol>
          </div>

          <p class="platforms">
            <span class="pf-label">Platforms</span> Meta Quest · PC VR · PS5 / PS VR2 · Windows
            <span class="sep" aria-hidden="true">/</span>
            <span class="pf-label">Engines</span> Unity · custom C++ (Vulkan, DirectX 11)
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Forefront teaser -->
  <section class="pf-section">
    <div class="pf">
      <div class="pf-head">
        <span class="pf-label pf-label--accent">Case study</span>
        <h2 class="pf-h2">Forefront: memory and GPU optimization for a 32-player VR shooter</h2>
      </div>
      <div class="pf-body">
        <dl class="mini-meta">
          <div><dt class="pf-label">Studio</dt><dd>Triangle Factory</dd></div>
          <div><dt class="pf-label">Role</dt><dd>Graphics &amp; optimization programmer</dd></div>
          <div><dt class="pf-label">Engine</dt><dd>Unity</dd></div>
          <div><dt class="pf-label">Recognition</dt><dd>Nominee, Best VR/AR Game, <a class="pf-link" href="https://thegameawards.com/categories/best-vr-ar" target="_blank" rel="noopener">The Game Awards 2026</a></dd></div>
        </dl>
        <div>
          <ul class="pf-list ff-list">
            <li><strong>Removed duplicate fonts and textures from memory: 148 MB less RAM</strong>, measured in the Unity Memory Profiler. Unity makes it surprisingly easy to load the same asset twice.</li>
            <li><strong>Added a build-time check</strong> that stops duplicate fonts from creeping back in.</li>
            <li><strong>Custom build actions and memory stripping</strong>, so less data ends up in the build and in RAM.</li>
            <li><strong>Moved far-scenery batching from the CPU to the GPU</strong> with compute shaders and indirect draw calls.</li>
            <li><strong>Shipped player-facing features too:</strong> weapon sight colour customization, the credits screen and vehicle skins.</li>
          </ul>
          <div class="pf-actions ff-actions">
            <a class="pf-btn pf-btn--ghost" href="/career/forefront">Read the case study <span aria-hidden="true">→</span></a>
            <a class="pf-link ff-post" href="/projects/blog-font-deduplication">Blog: Font RAM optimization in Unity</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Reference -->
  <section class="pf-section">
    <div class="pf">
      <div class="pf-body">
        <span class="pf-label pf-label--accent ref-label">Reference</span>
        <testimonial />
      </div>
    </div>
  </section>

  <!-- Own projects -->
  <section class="pf-section">
    <div class="pf">
      <div class="pf-head">
        <span class="pf-label pf-label--accent">Own projects</span>
        <div class="work-head">
          <h2 class="pf-h2">Renderers and engines I built from scratch</h2>
          <a class="pf-link" href="/projects">All {{ projects.length }} projects</a>
        </div>
      </div>
      <div class="work-grid">
        <work-card v-for="p in featured" :key="p.id" :project="p" />
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="pf-section">
    <div class="pf">
      <div class="pf-head">
        <span class="pf-label pf-label--accent">About</span>
        <h2 class="pf-h2">Hi, I'm Ivans</h2>
      </div>
      <div class="pf-body">
        <img
            class="about-photo"
            src="/images/avatar.webp"
            alt="Portrait of Ivans Minajevs"
            width="220"
            height="220"
            loading="lazy"
            decoding="async"
        />
        <div class="about-text">
          <p class="pf-text">
            I'm a graphics and optimization programmer from Riga, Latvia. I studied Game Development at Howest Digital Arts &amp; Entertainment
            in Belgium and graduated <strong>magna cum laude</strong> in 2026.
          </p>
          <p class="pf-text">
            I like owning performance problems: finding where the memory and GPU time go, and staying with the fix until it
            ships. In my free time I build my own renderers, like Salamander, to learn techniques properly.
          </p>
          <p class="pf-text">
            Since 2023 I've also been tutoring maths for the Latvian state exams. Explaining things simply is a big part of
            that job, and it helps when I write up my findings for a team.
          </p>

          <dl class="about-facts">
            <div><dt class="pf-label">Education</dt><dd>Howest DAE, Game Development, 2023 to 2026</dd></div>
            <div><dt class="pf-label">Languages</dt><dd>English (C1), Latvian (C1), Russian (C2)</dd></div>
            <div><dt class="pf-label">Competitions</dt><dd>KSIM informatics &amp; maths team competition, 3rd place · Oribot programming finals</dd></div>
          </dl>
          <a class="pf-link" href="/resume">Full resume</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { projects } from '../data/projects.js'
import WorkCard from './WorkCard.vue'
import Testimonial from './Testimonial.vue'

const featured = projects.filter((p) => ['salamander', 'mesh-area-lights', 'rasterizer', 'raytracer'].includes(p.id))

const budgets = [
  { label: '72 Hz', value: '13.9 ms', pct: 100 },
  { label: '90 Hz', value: '11.1 ms', pct: 80 },
  { label: '120 Hz', value: '8.3 ms', pct: 60 }
]

const memory = [
  { label: 'Quest 2', value: '6 GB', pct: 75 },
  { label: 'Quest 3', value: '8 GB', pct: 100 }
]

const services = [
  {
    title: 'Memory optimization',
    text: "I look at what's actually sitting in memory: textures, fonts, meshes, assets that got loaded twice or are never used. Then I cut it down and add build checks so it doesn't grow back. On standalone VR and consoles, running out of memory means a crash, not just a slowdown.",
    out: 'a smaller memory footprint, measured on the device, and checks in your build.'
  },
  {
    title: 'Profiling and audits',
    text: "I profile your game on the hardware it ships on and find out where the CPU time, GPU time and memory go. Then I write a short report: what's expensive, why, and what I would fix first.",
    out: 'a report with captures and a prioritized list of fixes.'
  },
  {
    title: 'CPU and GPU optimization',
    text: 'Draw calls and batching, moving CPU work into compute shaders, expensive shaders and overdraw. I can do the fixes myself or together with your team.',
    out: 'before and after numbers from the target device.'
  },
  {
    title: 'Rendering features',
    text: 'Shaders, compute passes and other rendering features in Unity, or in a custom C++ engine with Vulkan or DirectX 11. I plan them around your frame and memory budget from the start.',
    out: 'a feature that fits the budget, with notes for your team.'
  }
]

const steps = [
  { title: 'Measure', text: 'Profile on the target device before changing any code.' },
  { title: 'Find the cause', text: 'Dig into the captures until it is clear what is actually expensive.' },
  { title: 'Fix and verify', text: 'Measure again after the change to make sure it really helped.' },
  { title: 'Keep it fixed', text: "Add a check so the problem doesn't come back." }
]

const heroVideo = ref(null)

onMounted(() => {
  const video = heroVideo.value
  if (!video) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  // Let the page and poster finish first, then start streaming the loop
  const start = () => {
    video.preload = 'auto'
    video.play().catch(() => {})
  }
  const idle = () => ('requestIdleCallback' in window ? requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 300))
  if (document.readyState === 'complete') idle()
  else window.addEventListener('load', idle, { once: true })
})
</script>

<style scoped>
/* ---------- Hero ---------- */
.hero {
  display: grid;
  gap: 40px;
  padding-top: 56px;
  padding-bottom: 72px;
}

@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    gap: 48px 56px;
    align-items: center;
    padding-top: 88px;
    padding-bottom: 96px;
  }
}

.hero-status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
}

.status-mark {
  width: 8px;
  height: 8px;
  background: var(--vp-c-brand-1);
  flex: none;
}

.hero-lead {
  margin: 24px 0 32px;
}

.hero-media {
  align-self: center;
}

.facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px 32px;
  margin: 0;
  padding-top: 28px;
  border-top: 1px solid var(--vp-c-divider);
}

@media (min-width: 1024px) {
  .facts {
    grid-column: 1 / -1;
    grid-template-columns: repeat(4, 1fr);
  }
}

.facts dd,
.mini-meta dd,
.about-facts dd {
  margin: 4px 0 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

.facts a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--vp-c-border);
  text-underline-offset: 3px;
}

.facts a:hover {
  text-decoration-color: var(--vp-c-brand-1);
}

.anchor {
  scroll-margin-top: var(--vp-nav-height);
}

/* ---------- Frame budget ---------- */
.budget {
  align-self: start;
  margin-bottom: 40px;
  padding: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg-soft);
}

@media (min-width: 960px) {
  .budget {
    position: sticky;
    top: calc(var(--vp-nav-height) + 24px);
    margin-bottom: 0;
  }
}

.budget-sub {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.budget-row {
  display: grid;
  grid-template-columns: 60px 1fr 58px;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  font-family: var(--pf-font-meta);
  font-size: 13px;
}

.budget-hz {
  color: var(--vp-c-text-2);
}

.budget-ms {
  text-align: right;
  color: var(--vp-c-text-1);
}

.budget-bar {
  height: 6px;
  background: var(--vp-c-divider);
}

.budget-bar span {
  display: block;
  height: 100%;
  background: var(--vp-c-brand-1);
}

.budget-note {
  margin: 16px 0 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

/* ---------- Services ---------- */
.services {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 768px) {
  .services {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
}

.service {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 8px;
  padding: 24px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.service-num {
  padding-top: 3px;
  font-family: var(--pf-font-meta);
  font-size: 13px;
  color: var(--vp-c-brand-1);
}

.service-text {
  margin-top: 8px;
  font-size: 0.95rem;
}

.service-out {
  margin: 12px 0 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--vp-c-text-1);
}

.service-out .pf-label {
  margin-right: 6px;
}

/* ---------- Steps ---------- */
.steps {
  margin-top: 32px;
  padding: 24px 0 0;
  border-top: 1px solid var(--vp-c-divider);
}

.steps-label {
  margin-bottom: 16px;
}

.steps-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.steps-list li {
  display: grid;
  grid-template-columns: 22px 1fr;
  column-gap: 6px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.steps-list strong {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.steps-list li > span:last-child {
  grid-column: 2;
}

.step-num {
  font-family: var(--pf-font-meta);
  font-size: 13px;
  color: var(--vp-c-brand-1);
}

.platforms {
  margin: 32px 0 0;
  font-size: 0.9rem;
  line-height: 1.9;
  color: var(--vp-c-text-2);
}

.platforms .pf-label {
  margin-right: 6px;
}

.platforms .sep {
  margin: 0 10px;
  color: var(--vp-c-text-3);
}

/* ---------- Forefront teaser ---------- */
.mini-meta {
  display: grid;
  align-content: start;
  gap: 16px;
  margin: 0 0 32px;
}

.ff-list li {
  font-size: 1.05rem;
}

.ff-actions {
  align-items: center;
  gap: 12px 24px;
  margin-top: 32px;
}

/* ---------- Reference ---------- */
.ref-label {
  margin-bottom: 24px;
}

/* ---------- Work ---------- */
.work-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px 24px;
}

.work-grid {
  display: grid;
  gap: 40px 32px;
}

@media (min-width: 720px) {
  .work-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* ---------- About ---------- */
.about-photo {
  width: 160px;
  height: 160px;
  margin-bottom: 28px;
  object-fit: cover;
  object-position: top;
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg-soft);
}

@media (min-width: 960px) {
  .about-photo {
    width: 180px;
    height: 180px;
  }
}

.about-facts {
  display: grid;
  gap: 16px;
  margin: 32px 0 24px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

@media (min-width: 768px) {
  .about-facts {
    grid-template-columns: 1fr 1fr 1.4fr;
    gap: 24px;
  }
}
</style>
