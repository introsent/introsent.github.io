<template>
  <section id="contact" class="cta">
    <div class="pf cta-inner">
      <div>
        <div class="pf-label pf-label--accent">Contact</div>
        <h2 class="pf-h2 cta-title">Have a memory or performance problem, or a rendering feature to build?</h2>
        <p class="pf-text cta-text">
          Send me the engine, the target platform and what's slow or missing.
          Profiling captures help if you have them. NDAs are fine.
        </p>
      </div>

      <div class="cta-side">
        <a class="pf-btn cta-mail" :href="mailto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          {{ email }}
        </a>
        <ul class="cta-links">
          <li><a class="pf-link" href="https://linkedin.com/in/ivans-minajevs-991bbb214" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a class="pf-link" href="https://github.com/introsent" target="_blank" rel="noopener">GitHub</a></li>
          <li><a class="pf-link" href="https://discordapp.com/users/373133077448359957" target="_blank" rel="noopener">Discord</a></li>
          <li><a class="pf-link" href="/pdf/resume.pdf" target="_blank">Resume (PDF)</a></li>
        </ul>
        <p class="cta-note">Based in Riga, Latvia (UTC+2). Working remotely with studios anywhere.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const email = 'ivans.minajevs@outlook.com'
const mailto = `mailto:${email}?subject=${encodeURIComponent('Project inquiry')}`
</script>

<style scoped>
.cta {
  padding: 72px 0 24px;
  border-top: 1px solid var(--vp-c-divider);
  scroll-margin-top: var(--vp-nav-height);
}

@media (min-width: 960px) {
  .cta {
    padding: 96px 0 32px;
  }
}

.cta-inner {
  display: grid;
  gap: 40px;
}

@media (min-width: 960px) {
  .cta-inner {
    grid-template-columns: 1.3fr 1fr;
    gap: 64px;
    align-items: end;
  }
}

.cta-title {
  margin-top: 12px;
  max-width: 22ch;
}

.cta-text {
  margin-top: 16px;
}

.cta-mail {
  height: 52px;
  padding: 0 22px;
  font-size: 16px;
  max-width: 100%;
}

.cta-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
}

.cta-note {
  margin: 16px 0 0;
  font-family: var(--pf-font-meta);
  font-size: 13px;
  color: var(--vp-c-text-3);
}

@media (max-width: 420px) {
  .cta-mail {
    font-size: 14px;
    padding: 0 14px;
  }
}
</style>
