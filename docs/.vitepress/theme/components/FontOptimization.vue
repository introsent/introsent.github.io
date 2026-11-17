<template>
  <article class="pf art">
    <header class="art-header">
      <p class="pf-label"><a class="crumb" href="/">Home</a> / <a class="crumb" href="/blog">Blog</a></p>
      <h1 class="pf-h1 art-title">Font RAM Optimization in Unity</h1>
      <p class="pf-lead art-lead">Stripping duplicate TextMesh Pro font memory on a standalone VR build.</p>
      <p class="art-meta">
        <span class="pf-label">21 June 2026</span>
        <span class="pf-label">Unity · VR · Memory</span>
        <span class="art-context">From my work on <a class="pf-link" href="/career/forefront">Forefront</a> at Triangle Factory</span>
      </p>
    </header>

    <div class="art-body">
      <h2 class="pf-h2">The issue</h2>
      <p class="pf-text">
        TextMesh Pro (TMP) font assets in Unity have a requirement: any font referenced via a
        <code>&lt;font="Name"&gt;</code>
        <a class="pf-link" href="https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.2/manual/RichTextFont.html" target="_blank" rel="noopener">rich-text tag</a>
        or assigned as a TMP Settings default must live inside a <strong>Resources</strong> folder. At the same time, the
        <a class="pf-link" href="https://docs.unity3d.com/Packages/com.unity.addressables@3.1/manual/index.html" target="_blank" rel="noopener">Addressables</a>
        build pipeline packs anything reachable from a scene, prefab, or preloaded asset list into its own bundles. Any font
        asset that satisfies both systems at once eventually gets pulled into memory twice: once by the Resources loader at
        startup, once by the addressable bundle.
      </p>
      <p class="pf-text">
        It may not seem like a huge issue, but on <strong>Android VR</strong> hardware memory is one of the largest concerns,
        especially on older platforms like <strong>Quest 2</strong>. Combined with <strong>Chinese/Japanese/Korean</strong>
        localization and different font width styles, a project can easily end up with an extra 150 MB of unused memory in RAM.
      </p>

      <h2 class="pf-h2">A 3-step solution</h2>
      <ol class="art-steps">
        <li>
          <span class="art-step-num">01</span>
          <div>
            <h3 class="pf-h3">Build action: font stripping</h3>
            <p class="pf-text">A custom pre-build action that walks every prefab, scene and material, removes font and font material references, and <strong>records where each one was</strong>.</p>
          </div>
        </li>
        <li>
          <span class="art-step-num">02</span>
          <div>
            <h3 class="pf-h3">Build action: validation</h3>
            <p class="pf-text">A custom post-build action that fails the build step if any forbidden reference survives in Resources, scenes, preloaded assets, or always-included shaders.</p>
          </div>
        </li>
        <li>
          <span class="art-step-num">03</span>
          <div>
            <h3 class="pf-h3">Runtime: font loading</h3>
            <p class="pf-text">A loader that restores the stripped references from Addressables at runtime, after the build-only copy is already excluded.</p>
          </div>
        </li>
      </ol>

      <h2 class="pf-h2">Measured impact</h2>
      <figure class="pf-frame art-figure">
        <img
            src="/images/font-deduplication/memory-profiler.webp"
            alt="Unity Memory Profiler capture comparing TMP font memory before and after stripping"
            width="979"
            height="513"
            loading="lazy"
            decoding="async"
        />
        <figcaption>
          <span>Unity Memory Profiler: TMP font memory before and after stripping</span>
        </figcaption>
      </figure>

      <h2 class="pf-h2">Tracking down every reference</h2>
      <p class="pf-text">
        The hard part was never writing code that strips fonts in Resources. That logic is straightforward if you know how to
        loop over prefabs and active scenes and have basic knowledge of ScriptableObjects.
      </p>
      <p class="pf-text">
        The difficult part was finding every place, or category, where font references hide. TextMesh Pro spreads font and
        material references across more entities than the inspector suggests. This is the list that actually mattered for
        this project:
      </p>

      <h3 class="pf-h3 art-h3">Where font references actually live</h3>
      <ul class="pf-list art-list">
        <li><code>TMP_Text</code> components: the font asset field itself, and the <code>m_sharedMaterial</code> and <code>m_fontSharedMaterials</code> fields.</li>
        <li>Custom text components wrapping a font set collection asset, resolved through a separate indirection layer instead of TMP's own font field.</li>
        <li><code>TMP_SubMeshUI</code> / <code>TMP_SubMesh</code> child objects, which TMP creates automatically for multi-atlas text and which carry their own <strong>independent</strong> font and material slots.</li>
        <li>The TMP Settings default font asset and fallback font list: global, singleton-style references that pull a font into every build regardless of whether any scene uses it.</li>
        <li>Per-font fallback tables (<code>m_FallbackFontAssetTable</code>), where one font asset references another, creating a chain that the build pipeline treats as a hard dependency.</li>
        <li><strong>Always Included Shaders</strong> in Graphics Settings and <strong>Preloaded Assets</strong> in Player Settings. Neither shows up when browsing a scene, but both are root objects the build pipeline keeps alive unconditionally.</li>
        <li>Nested prefab variants, where the base prefab's font reference lives on the base asset and a variant's stripped override doesn't propagate backward. The base has to be re-checked independently, not just walked transitively from the variant.</li>
      </ul>

      <h3 class="pf-h3 art-h3">But the list is not set in stone</h3>
      <p class="pf-text">
        Font references may live in other places; it's very individual to each project. That's why the validator exists.
        Every one of those surfaces can silently regress. For example: a teammate adds a fallback font, or an artist drags a
        material back onto a header prefab to preview it. BOOM, and the duplication is back. Quietly, with no error, until
        someone runs a memory capture on-device weeks or even months later. Catching it at build time, with the exact
        dependency chain printed in the logs for the developers, is as important as the stripping logic itself.
      </p>

      <h2 class="pf-h2">The other half: material atlases</h2>
      <p class="pf-text">
        If you look at the Memory Profiler picture carefully, you will notice memory improvements in the
        <code>Texture2DArray</code> block. Stripping the font assets solved half the duplication. The other half was a batched
        UI material that samples six font atlases (2 language types × 3 weights). Those were packed as individual textures on
        one shared material, used across the whole UI to keep draw calls low. The naive fix was a <code>Texture2DArray</code>
        built at import time, copying every atlas into one array texture. That works, but at the cost of every atlas being
        copied: one inside each <code>TMP_FontAsset</code>, and one duplicated into the array.
      </p>
      <p class="pf-text">
        To fix it, the batched UI material's atlas slots are now populated by <code>OnGUI</code>-stage code that reads each
        atlas directly off the live <code>TMP_FontAsset</code> objects and assigns them straight onto the material's texture
        properties. No array, no copy: the material points at the same atlas textures the font assets already own in memory.
        The font assets stay the single owner and the batched material just references them.
      </p>

      <h2 class="pf-h2">Technical highlights</h2>
      <dl class="art-highlights">
        <div v-for="h in highlights" :key="h.title">
          <dt>{{ h.title }}</dt>
          <dd>{{ h.text }}</dd>
        </div>
      </dl>

      <h2 class="pf-h2">Further reading</h2>
      <div class="art-refs">
        <div>
          <h3 class="pf-label pf-label--accent">The unresolved upstream issue</h3>
          <ul class="pf-list">
            <li><a class="pf-link" href="https://discussions.unity.com/t/textmesh-pro-font-assets-duplicated-in-memory-resources-assetbundle/738373" target="_blank" rel="noopener">TextMesh Pro: font assets duplicated in memory (Resources &amp; AssetBundle)</a></li>
            <li><a class="pf-link" href="https://discussions.unity.com/t/bug-1-2-4-duplicate-textmeshpro-assets-in-bundles/760299" target="_blank" rel="noopener">[Bug 1.2.4] Duplicate TextMeshPro assets in bundles</a></li>
            <li><a class="pf-link" href="https://discussions.unity.com/t/textmeshpro-addressables-asset-bundles/855482" target="_blank" rel="noopener">TextMeshPro &amp; Addressables (Asset Bundles)</a></li>
          </ul>
        </div>
        <div>
          <h3 class="pf-label pf-label--accent">Tools &amp; systems</h3>
          <ul class="pf-list">
            <li><a class="pf-link" href="https://docs.unity3d.com/Packages/com.unity.textmeshpro@latest" target="_blank" rel="noopener">TextMesh Pro</a></li>
            <li><a class="pf-link" href="https://docs.unity3d.com/Packages/com.unity.addressables@latest" target="_blank" rel="noopener">Addressables</a></li>
            <li><a class="pf-link" href="https://docs.unity3d.com/Manual/com.unity.memoryprofiler.html" target="_blank" rel="noopener">Unity Memory Profiler</a></li>
          </ul>
        </div>
      </div>

      <nav class="art-next">
        <a class="pf-btn pf-btn--ghost" href="/blog"><span aria-hidden="true">←</span> All posts</a>
        <a class="pf-btn pf-btn--ghost" href="/career/forefront">Forefront case study <span aria-hidden="true">→</span></a>
      </nav>
    </div>
  </article>
</template>

<script setup>
const highlights = [
  { title: 'Pre-build stripping', text: 'Nulls font and material references before the build.' },
  { title: 'Runtime loading', text: 'Restores the references from Addressables at load time.' },
  { title: 'Dependency graph walk', text: 'Validates Resources, scenes, shaders and preloaded assets.' },
  { title: 'Nested prefab convergence', text: 'Iterates until base prefabs are clean too.' },
  { title: 'Direct atlas binding', text: 'No Texture2DArray copy for the batched UI material.' },
  { title: 'Remap table', text: 'Records every stripped reference so it can be restored later.' },
  { title: 'Build-time failure', text: 'Fails with the exact dependency chain in the log.' }
]
</script>

<style scoped>
.art {
  padding-top: 56px;
}

@media (min-width: 960px) {
  .art {
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

.art-header,
.art-body {
  max-width: 760px;
}

.art-title {
  margin-top: 16px;
}

.art-lead {
  margin-top: 20px;
}

.art-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 20px;
  margin: 28px 0 0;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.art-context {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

.art-body {
  margin-top: 16px;
}

.art-body > .pf-h2 {
  margin: 56px 0 16px;
}

.art-body > .pf-text + .pf-text {
  margin-top: 1em;
}

.art-h3 {
  margin: 32px 0 14px;
}

.art-body code {
  padding: 1px 6px;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  font-family: var(--vp-font-family-mono);
  font-size: 0.86em;
  color: var(--vp-c-text-1);
}

.art-steps {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.art-steps li {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 8px;
  padding: 18px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.art-steps li:last-child {
  border-bottom: 1px solid var(--vp-c-divider);
}

.art-steps .pf-text {
  margin-top: 6px;
  font-size: 0.95rem;
}

.art-step-num {
  padding-top: 2px;
  font-family: var(--pf-font-meta);
  font-size: 13px;
  color: var(--vp-c-brand-1);
}

.art-figure {
  background: var(--vp-c-bg-soft);
}

.art-figure img {
  aspect-ratio: auto;
  object-fit: contain;
}

.art-list li {
  font-size: 0.97rem;
}

.art-highlights {
  display: grid;
  gap: 0 32px;
  margin: 0;
}

@media (min-width: 640px) {
  .art-highlights {
    grid-template-columns: 1fr 1fr;
  }
}

.art-highlights > div {
  padding: 14px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.art-highlights dt {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.art-highlights dd {
  margin: 4px 0 0;
  font-size: 0.93rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.art-refs {
  display: grid;
  gap: 32px;
}

@media (min-width: 640px) {
  .art-refs {
    grid-template-columns: 1.3fr 1fr;
  }
}

.art-refs h3 {
  margin: 0 0 14px;
  font-weight: 500;
}

.art-refs li {
  font-size: 0.95rem;
}

.art-next {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
