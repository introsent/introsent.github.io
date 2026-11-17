<template>
  <article class="ff">
    <!-- Header -->
    <header class="pf ff-header">
      <p class="pf-label"><a class="crumb" href="/">Home</a> / Case study</p>
      <h1 class="pf-h1 ff-title">Forefront: memory and GPU optimization for standalone VR</h1>
      <p class="pf-lead ff-lead">
        Forefront is Triangle Factory's 32-player VR shooter, available on Meta Quest, Steam, PlayStation VR2 and Pico.
        Standalone headsets have very little RAM and GPU time to spare, so a lot of my work there was finding out where
        memory and GPU time were going and bringing them down. I joined in February 2026 as an intern and stayed on as a
        freelance developer.
      </p>
      <div class="ff-links">
        <a class="pf-award" href="https://thegameawards.com/categories/best-vr-ar" target="_blank" rel="noopener">
          <strong>The Game Awards 2026</strong>
          <span>Forefront is nominated for Best VR/AR Game</span>
        </a>
        <a class="pf-link" href="https://www.triangle-factory.be/forefront" target="_blank" rel="noopener">Forefront on Triangle Factory's site</a>
      </div>

      <figure class="pf-frame ff-trailer">
        <button
            v-if="!trailerOn"
            type="button"
            class="trailer-poster"
            aria-label="Play the Forefront trailer"
            @click="trailerOn = true"
        >
          <img src="/images/posters/forefront.webp" alt="" width="1280" height="720" decoding="async" />
          <span class="trailer-play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          </span>
        </button>
        <iframe
            v-else
            src="https://www.youtube-nocookie.com/embed/M11IZk0RmaQ?autoplay=1&rel=0"
            title="Forefront trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <figcaption>
          <span>Forefront trailer, Triangle Factory</span>
          <span>YouTube loads only when you press play</span>
        </figcaption>
      </figure>

      <dl class="ff-meta">
        <div><dt class="pf-label">Studio</dt><dd>Triangle Factory, makers of Hyper Dash, Breachers and Forefront</dd></div>
        <div><dt class="pf-label">Role</dt><dd>Graphics &amp; optimization programmer (intern, then freelance)</dd></div>
        <div><dt class="pf-label">Engine</dt><dd>Unity, C#, HLSL compute</dd></div>
        <div><dt class="pf-label">Tools</dt><dd>RenderDoc, NVIDIA Nsight, Razor (PS5), OVR Metrics Tool, Unity profiling tools</dd></div>
      </dl>

      <p class="nda">
        <span class="pf-label">Note</span>
        This page only covers what is public. Internal numbers, code and tooling stay under NDA.
      </p>
    </header>

    <!-- Constraint -->
    <section class="pf-section">
      <div class="pf pf-body">
        <span class="pf-label pf-label--accent">The constraint</span>
        <div>
          <h2 class="pf-h2">Shared memory and a mobile chip</h2>
          <p class="pf-text sec-text">
            A Quest 2 has <strong>6 GB</strong> of RAM and a Quest 3 has <strong>8 GB</strong>, shared by the OS, the CPU and
            the GPU. If a game uses too much, the OS simply closes it. On top of that, every frame is rendered for two eyes:
            at 72 Hz that leaves <strong>13.9 ms</strong> per frame, at 90 Hz <strong>11.1 ms</strong>.
          </p>
          <p class="pf-text">
            A 32-player shooter with large maps has to fit inside both limits, so textures, fonts, distant scenery and draw
            calls all count.
          </p>
        </div>
      </div>
    </section>

    <!-- Work 1: memory -->
    <section class="pf-section">
      <div class="pf pf-body">
        <span class="pf-label pf-label--accent">01 · Memory</span>
        <div>
          <h2 class="pf-h2">Duplicate fonts and textures</h2>
          <p class="pf-text sec-text">
            In Unity it's easy to end up with the same font or texture in memory more than once. TextMesh Pro needs some
            fonts in a Resources folder, while Addressables packs the same fonts into its own bundles, so they get loaded
            twice. With CJK localization and several font weights, that adds up fast on a headset with 6 to 8 GB shared by
            everything.
          </p>
          <p class="pf-text">
            I tracked down where each duplicate came from and removed them, so the game keeps one copy of each asset instead
            of several. A batched UI material that copied six font atlases into a texture array now points at the atlases
            the fonts already own. In the Unity Memory Profiler, the total came out to <strong>148 MB less RAM</strong>.
          </p>
          <a class="pf-btn pf-btn--ghost ff-read" href="/projects/blog-font-deduplication">Read the full write-up <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <!-- Work 2: build pipeline -->
    <section class="pf-section">
      <div class="pf pf-body">
        <span class="pf-label pf-label--accent">02 · Build pipeline</span>
        <div>
          <h2 class="pf-h2">Keeping memory down after the fix</h2>
          <p class="pf-text sec-text">
            Memory fixes like this tend to come back the moment someone adds a new font. So I added a validation step that
            fails the build if a duplicate font reference survives, and prints the exact dependency chain so the offending
            prefab is obvious right away. It costs nothing at runtime and nobody has to remember the rule.
          </p>
          <p class="pf-text">
            I also worked on custom build actions and memory stripping, so data the game doesn't need never ends up in the
            build or in RAM in the first place.
          </p>
        </div>
      </div>
    </section>

    <!-- Work 3: GPU batching -->
    <section class="pf-section">
      <div class="pf pf-body">
        <span class="pf-label pf-label--accent">03 · Rendering</span>
        <div>
          <h2 class="pf-h2">Far scenery: from CPU batching to GPU-driven drawing</h2>
          <p class="pf-text sec-text">
            Distant scenery used to be batched on the CPU. I moved that work to the GPU: a compute shader now does the batching
            and writes the draw arguments, and indirect draw calls consume them. The CPU no longer has to gather and submit that
            geometry itself every frame.
          </p>

          <figure class="flow" aria-label="Diagram: far scenery batching before and after">
            <div class="flow-block">
              <div class="pf-label flow-title">Before</div>
              <div class="lane">
                <span class="lane-name">CPU</span>
                <ol class="chips">
                  <li class="chip chip--hot">Gather distant objects</li>
                  <li class="chip chip--hot">Build batches</li>
                  <li class="chip chip--hot">Submit draws</li>
                </ol>
              </div>
              <div class="lane">
                <span class="lane-name">GPU</span>
                <ol class="chips"><li class="chip">Draw</li></ol>
              </div>
            </div>
            <div class="flow-block">
              <div class="pf-label flow-title">After</div>
              <div class="lane">
                <span class="lane-name">CPU</span>
                <ol class="chips">
                  <li class="chip">Dispatch compute</li>
                  <li class="chip">Issue indirect draws</li>
                </ol>
              </div>
              <div class="lane">
                <span class="lane-name">GPU</span>
                <ol class="chips">
                  <li class="chip chip--accent">Compute: batch far scenery, write draw args</li>
                  <li class="chip">Draw indirect</li>
                </ol>
              </div>
            </div>
            <figcaption>Simplified. The per-object work moves off the CPU's frame and onto the GPU, where it runs in parallel.</figcaption>
          </figure>
          <p class="ff-soon"><span class="pf-label pf-label--accent">Coming soon</span> A full write-up of the far LOD batching.</p>
        </div>
      </div>
    </section>

    <!-- Work 4: profiling + features -->
    <section class="pf-section">
      <div class="pf pf-body">
        <span class="pf-label pf-label--accent">04 · Also</span>
        <div class="also">
          <div>
            <h3 class="pf-h3">Profiling across platforms</h3>
            <p class="pf-text also-text">
              CPU and GPU performance analysis, including PS5 and PS VR2 captures in Razor, followed by shader and rendering
              optimization based on what the captures showed.
            </p>
          </div>
          <div>
            <h3 class="pf-h3">Player-facing features</h3>
            <p class="pf-text also-text">
              Not everything was optimization. I also shipped weapon sight colour customization, the credits screen and vehicle skins.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related posts -->
    <section class="pf-section">
      <div class="pf pf-body">
        <span class="pf-label pf-label--accent">Related posts</span>
        <post-list />
      </div>
    </section>

    <!-- Reference -->
    <section class="pf-section">
      <div class="pf pf-body">
        <span class="pf-label pf-label--accent">From the CTO</span>
        <testimonial
            :quote="[
              'He made a major contribution to the memory and GPU optimization of Forefront. He also removed duplicate copies of fonts and textures from memory (not an easy task in Unity!), and added a build-time check that stops duplicate fonts from creeping back in.',
              'Some of this work took several iterations across multiple releases, and he stayed with it until it shipped.'
            ]"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import Testimonial from './Testimonial.vue'
import PostList from './PostList.vue'

const trailerOn = ref(false)
</script>

<style scoped>
.ff-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 24px;
  margin-top: 24px;
}

.ff-trailer {
  margin-top: 40px;
}

.ff-trailer iframe,
.trailer-poster {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
}

.trailer-poster {
  position: relative;
  padding: 0;
  background: #000;
  cursor: pointer;
}

.trailer-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity 0.15s;
}

.trailer-poster:hover img,
.trailer-poster:focus-visible img {
  opacity: 1;
}

.trailer-play {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  border-radius: 50%;
  background: var(--pf-btn-bg);
  color: var(--pf-btn-text);
  transition: background-color 0.15s;
}

.trailer-poster:hover .trailer-play {
  background: var(--pf-btn-bg-hover);
}

.trailer-play svg {
  width: 26px;
  height: 26px;
  margin-left: 3px;
}

.ff-read {
  margin-top: 24px;
}

.ff-soon {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  align-items: baseline;
  margin: 20px 0 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

.ff-header {
  padding-top: 56px;
  padding-bottom: 64px;
}

@media (min-width: 960px) {
  .ff-header {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

.crumb {
  color: inherit;
  text-decoration: none;
}

.crumb:hover {
  color: var(--vp-c-brand-1);
}

.ff-title {
  max-width: 20ch;
  margin-top: 16px;
}

.ff-lead {
  margin-top: 24px;
}

.ff-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px 32px;
  margin: 40px 0 0;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.ff-meta dd {
  margin: 4px 0 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

.nda {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  margin: 32px 0 0;
  padding: 12px 14px;
  border: 1px dashed var(--vp-c-border);
  border-radius: var(--pf-radius);
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.pf-body > .pf-label {
  margin-bottom: 16px;
}

.sec-text {
  margin-top: 16px;
}

/* ---------- Flow diagram ---------- */
.flow {
  display: grid;
  gap: 16px;
  margin: 36px 0 0;
}

.flow-block {
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg-soft);
}

.flow-title {
  margin-bottom: 12px;
}

.lane {
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: start;
  gap: 8px;
  padding: 10px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.lane-name {
  padding-top: 5px;
  font-family: var(--pf-font-meta);
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 9px;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  font-family: var(--pf-font-meta);
  font-size: 13px;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.chip {
  position: relative;
}

.chip + .chip {
  margin-left: 20px;
}

.chip + .chip::before {
  content: '→';
  position: absolute;
  left: -16px;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-3);
}

.chip--hot {
  border-color: rgb(var(--accent-rgb) / 0.55);
  background: rgb(var(--accent-rgb) / 0.08);
}

.chip--accent {
  border-color: var(--vp-c-brand-1);
}

.flow figcaption {
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}

/* ---------- Also ---------- */
.also {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  .also {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

.also-text {
  margin-top: 10px;
}
</style>
