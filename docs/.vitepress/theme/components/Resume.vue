<template>
  <article class="pf cv">
    <header class="cv-header">
      <p class="pf-label"><a class="crumb" href="/">Home</a> / Resume</p>
      <h1 class="pf-h1 cv-title">Resume</h1>
      <p class="pf-lead cv-lead">
        C++/C# programmer specializing in graphics programming and optimization. Experience with VR/XR development at a
        game studio, mainly rendering features, CPU and RAM optimization, profiling, GPU compute shaders and rendering logic.
        I regularly use RenderDoc, NVIDIA Nsight, OVR Metrics Tool and Unity's built-in tooling.
      </p>
      <div class="pf-actions">
        <a class="pf-btn" href="/pdf/resume.pdf" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M4 21h16"/></svg>
          Download PDF
        </a>
        <a class="pf-btn pf-btn--ghost" href="/recommendation">Letter of recommendation</a>
      </div>
    </header>

    <section class="cv-section">
      <h2 class="pf-label pf-label--accent">Experience</h2>
      <div class="cv-items">
        <div class="cv-item">
          <div class="cv-when">2026</div>
          <div>
            <h3 class="pf-h3">Graphics &amp; optimization programmer · Triangle Factory</h3>
            <p class="cv-sub">Intern, then freelance. Work on <a class="pf-link" href="/career/forefront">Forefront</a>, nominated for Best VR/AR Game at The Game Awards 2026.</p>
            <ul class="pf-list">
              <li>Performance and RAM optimization for VR: custom build actions, memory stripping, duplicate font and texture removal, a build-time duplicate check.</li>
              <li>Rendering features; far-LOD mesh batching moved to the GPU with compute shaders and indirect draws.</li>
              <li>PS5 / PS VR2 CPU and GPU performance analysis with Razor; shader and rendering optimization.</li>
            </ul>
          </div>
        </div>
        <div class="cv-item">
          <div class="cv-when">2025 to now</div>
          <div>
            <h3 class="pf-h3">Salamander · personal project</h3>
            <p class="cv-sub">Vulkan rendering engine in C++20. <a class="pf-link" href="/projects/salamander">Project page</a></p>
          </div>
        </div>
        <div class="cv-item">
          <div class="cv-when">2023 to now</div>
          <div>
            <h3 class="pf-h3">Mathematics tutor · Preply</h3>
            <p class="cv-sub">Preparing students in Latvia for the Mathematics 1 and 2 state exams; helping with maths-heavy science projects.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h2 class="pf-label pf-label--accent">Education</h2>
      <div class="cv-items">
        <div class="cv-item">
          <div class="cv-when">2023 to 2026</div>
          <div>
            <h3 class="pf-h3">Howest, Digital Arts &amp; Entertainment</h3>
            <p class="cv-sub">Game Development. Graduated magna cum laude.</p>
          </div>
        </div>
        <div class="cv-item">
          <div class="cv-when">2011 to 2023</div>
          <div>
            <h3 class="pf-h3">Riga Zolitude Gymnasium</h3>
            <p class="cv-sub">Physics and mathematics.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cv-section cv-grid">
      <div>
        <h2 class="pf-label pf-label--accent">Skills</h2>
        <ul class="pf-tags cv-tags">
          <li v-for="s in skills" :key="s" class="pf-tag">{{ s }}</li>
        </ul>
      </div>
      <div>
        <h2 class="pf-label pf-label--accent">Achievements</h2>
        <ul class="pf-list cv-list">
          <li><strong>KSIM, 3rd place.</strong> Team competition in informatics and mathematics.</li>
          <li><strong>Oribot.</strong> Finals of the programming competition.</li>
        </ul>
      </div>
      <div>
        <h2 class="pf-label pf-label--accent">Languages</h2>
        <ul class="pf-list cv-list">
          <li>English, C1</li>
          <li>Latvian, C1</li>
          <li>Russian, C2</li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
const skills = [
  'C++', 'C#', 'HLSL / GLSL', 'Vulkan', 'DirectX 11', 'OpenGL', 'Unity', 'Compute shaders',
  'RenderDoc', 'NVIDIA Nsight', 'Razor', 'OVR Metrics Tool', 'Unity Profiler'
]
</script>

<style scoped>
.cv {
  padding-top: 56px;
}

@media (min-width: 960px) {
  .cv {
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

.cv-title {
  margin-top: 16px;
}

.cv-lead {
  margin: 20px 0 28px;
}

.cv-section {
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.cv-section > h2,
.cv-grid h2 {
  margin: 0 0 20px;
  font-weight: 400;
}

.cv-items {
  display: grid;
  gap: 28px;
}

.cv-item {
  display: grid;
  gap: 4px 32px;
}

@media (min-width: 768px) {
  .cv-item {
    grid-template-columns: 160px 1fr;
  }
}

.cv-when {
  padding-top: 3px;
  font-family: var(--pf-font-meta);
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.cv-sub {
  margin: 6px 0 12px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.cv-grid {
  display: grid;
  gap: 40px;
}

@media (min-width: 768px) {
  .cv-grid {
    grid-template-columns: 1.4fr 1fr 0.6fr;
  }
}

.cv-list li {
  font-size: 0.95rem;
}
</style>
