<template>
  <article class="pf rec">
    <header class="rec-header">
      <p class="pf-label"><a class="crumb" href="/">Home</a> / Reference</p>
      <h1 class="pf-h1 rec-title">Letter of recommendation</h1>
      <p class="pf-lead rec-lead">From Pieter Vantorre, CTO of Triangle Factory, after almost a year of working together on Forefront.</p>
      <div class="pf-actions">
        <a class="pf-btn pf-btn--ghost" href="/pdf/recommendation-triangle-factory.pdf" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M4 21h16"/></svg>
          Original letter (PDF)
        </a>
      </div>
    </header>

    <div class="letter">
      <p>Dear Hiring Manager,</p>
      <p>
        I am writing to recommend <strong>Ivans Minajevs</strong>, who worked at Triangle Factory* both as an intern and as a
        freelance developer. As CTO, I have had the pleasure of working closely with him for almost a year. He is highly
        motivated, learns quickly and is a friendly, reliable team player.
      </p>
      <p>
        Ivans has a passion for deep technical work and enjoys making code faster and leaner. During his time at Triangle
        Factory, he made a major contribution to the memory and GPU optimization of Forefront, our multiplayer VR shooter,
        which also runs on standalone headsets such as the Meta Quest, where hardware resources are tight. Among other things,
        <mark>he moved the batching of distant scenery from the CPU to the GPU using compute shaders and indirect draw calls.</mark>
        He also removed duplicate copies of fonts and textures from memory (not an easy task in Unity!), and added a build-time
        check that stops duplicate fonts from creeping back in.
      </p>
      <p>
        What impressed me most was the ownership he took. <mark>He did not wait to be assigned these problems: he investigated
        where memory and GPU time were going and carried each fix through to release.</mark> Some of this work took several
        iterations across multiple releases, and he stayed with it until it shipped.
      </p>
      <p>
        Alongside his optimization work, he shipped player-facing features such as weapon sight color customization, the
        credits screen and vehicle skins. He has impressed me with his level of skill, especially for someone with less than a
        year in the industry. At a time when AI tools can write much of the routine code, he stands out because
        <mark>he understands what happens underneath: he measures, finds the root cause and verifies the result.</mark>
      </p>
      <p>
        Unfortunately, our current budget does not allow us to keep Ivans on. This is in no way a reflection of his work, and I
        would welcome the chance to work with him again.
      </p>
      <p>
        I recommend Ivans without reservation. If you have any questions about his work, please feel free to contact me at
        <a class="pf-link" href="mailto:pieter@trianglefactory.be">pieter@trianglefactory.be</a>.
      </p>
      <p class="sign">
        Sincerely,<br />
        <strong>Pieter Vantorre</strong><br />
        CTO, Triangle Factory
      </p>
      <p class="foot">
        * Triangle Factory is an award-winning VR studio. Its critically acclaimed titles Hyper Dash, Breachers and Forefront
        have consistently earned user ratings of 4.5 stars or higher, regularly rank among the best-selling VR games, and have
        won multiple awards for pushing the boundaries of VR gameplay.
      </p>
    </div>
  </article>
</template>

<style scoped>
.rec {
  padding-top: 56px;
  padding-bottom: 24px;
}

@media (min-width: 960px) {
  .rec {
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

.rec-title {
  margin-top: 16px;
}

.rec-lead {
  margin: 20px 0 28px;
}

.letter {
  max-width: 720px;
  margin-top: 48px;
  padding: 32px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg-soft);
}

@media (min-width: 768px) {
  .letter {
    padding: 48px 56px;
  }
}

.letter p {
  margin: 0 0 1.1em;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--vp-c-text-1);
}

.letter mark {
  background: rgb(var(--accent-rgb) / 0.16);
  color: inherit;
  padding: 0 2px;
  border-radius: 2px;
}

.addr {
  font-family: var(--pf-font-meta);
  font-size: 0.9em;
}

.sign {
  margin-top: 2em !important;
}

.foot {
  margin: 2em 0 0 !important;
  padding-top: 1.2em;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.875rem !important;
  font-style: italic;
  color: var(--vp-c-text-2) !important;
}
</style>
