<template>
  <div class="fontram-container">
    <div class="project-header">
      <h1>Font RAM Optimization in Unity</h1>
      <p class="project-tagline">Stripping duplicate TextMesh Pro font memory on a standalone VR build</p>
      <div class="project-meta">
        <a
            href="https://discussions.unity.com/t/textmesh-pro-font-assets-duplicated-in-memory-resources-assetbundle/738373"
            class="github-btn"
            target="_blank"
        >
          <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.5 8 12 11.82 4.5 8 12 4.18zM4 9.7l7 3.5v7.6l-7-3.5V9.7zm9 11.1v-7.6l7-3.5v7.6l-7 3.5z"/>
          </svg>
          Related Unity thread
        </a>
      </div>
    </div>


    <div class="section">
      <h2 class="section-title">Issue Overview</h2>
      <p class="section-description">
        TextMesh Pro (TMP) font assets in Unity have a requirement, that any font referenced via
        <code>&lt;font="Name"&gt;</code> <a href="https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.2/manual/RichTextFont.html">rich-text tag</a> or assigned as a TMP Settings default
        must live inside a <strong>Resources</strong> folder. At the same time, <a href="https://docs.unity3d.com/Packages/com.unity.addressables@3.1/manual/index.html">Addressables</a> build pipeline packs anything reachable from a scene, prefab, or preloaded asset list into its
        own bundles. Any font asset that satisfies both systems at once eventually gets pulled into memory twice -
        once by the Resources loader at startup, once by the addressable bundle.
      </p>

      <p class="section-description">
        It may not seem like a huge issue, but considering <b>Android VR</b>
        hardware specifics, memory is one of the largest concerns, especially when it comes to older platforms like <b>Quest 2</b>.
        This, combined with <b>Chinese/Japanese/Korean</b> localization and different font width styles,
        project can easily end up with extra 150 MB of unused memory in RAM.
      </p>

      <h2 class="section-title">3-step solution</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Build action: Font Stripping</h3>
          <p>A custom pre-build action that walks every prefab scene, material and removes font and it's material references and <b>records where each one was</b>.</p>
        </div>
        <div class="feature-card">
          <h3>Build action: Validation</h3>
          <p>A custom post-build action that fails the build step if any forbidden reference survives in Resources, scenes, preloaded assets, or always-included shaders.</p>
        </div>
        <div class="feature-card">
          <h3>Runtime: Font Loading</h3>
          <p>A loader that restores the stripped references from Addressables at runtime, after the build-only copy is already excluded.</p>
        </div>
      </div>
    </div>

    <!-- Performance Graph Placeholder -->
    <div class="section">
      <h2 class="section-title">Measured Impact</h2>
      <img
          src="/images/font-deduplication/memory-profiler.png"
          alt="Unity Memory Profiler capture comparing TMP font memory before and after stripping"
          class="graph-image"
      />
    </div>

    <div class="section">
      <div class="project-story">
        <h3>Tracking Down Every Reference</h3>
        <p>
          The hard part was never writing code that strips fonts in Resources. There, logic is straightforward, if you know how
          to work with looping over prefabs and active scenes, and have basic knowledge of Scriptable objects.

          The difficult part was finding every place, or category, where font references hide. TextMesh Pro spreads font and material
          references across more entities than inspector suggests. Hence, in the core of this blogpost, I presented a list, that actually mattered
          for this project:
        </p>

        <div class="challenges">
          <h4>Where Font References Actually Live</h4>
          <ul class="challenge-list">
            <li><code>TMP_Text</code> components - the font asset field itself, <code>m_sharedMaterial</code> and <code>m_fontSharedMaterials</code> fields</li>
            <li>Custom text components wrapping a font set collection asset. Resolved through a separate indirection layer instead of TMP's own font field</li>
            <li><code>TMP_SubMeshUI</code> / <code>TMP_SubMesh</code> child objects, which TMP creates automatically for multi-atlas text and which carry their own <b>independent</b> font and material slots</li>
            <li>TMP Settings default font asset and fallback font list - global, singleton-style references that pull a font into every build regardless of whether any scene uses it</li>
            <li>Per-font fallback tables (<code>m_FallbackFontAssetTable</code>), where one font asset references another, creating a chain that the build pipeline treats as a hard dependency</li>
            <li><b>Always Included Shaders</b> in Graphics Settings and <b>Preloaded Assets</b> in Player Settings - neither shows up by browsing a scene, but both are root objects the build pipeline keeps alive unconditionally</li>
            <li>Nested prefab variants, where the base prefab's font reference lives on the base asset and a variant's stripped override doesn't propagate backward - meaning the base has to be re-checked independently, not just walked transitively from the variant</li>
          </ul>

          <h4>But, list is NOT set in stone</h4>
          <p>
            Font references may live in other places, its very individual to the project. Hence, the validator exists.
            Every one of those surfaces can silently regress. To give an example <code>"A teammate
            adds a fallback font, an artist drags a material back onto a header prefab to preview it"</code> BOOM 💥 and the duplication is back.
            Quietly, with no error until someone runs a memory capture
            on-device weeks, or even worse, months later. Catching it at build time, with the exact dependency chain printed
            in the logs back to the developers is as important as the stripping logic itself.
          </p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="project-story">
        <h3>The Other Half: Material Atlases</h3>
        <p>
          If you look at Memory Profiler picture carefully, you will notice memory improvements in <code>Texture2DArray</code> block.
          Stripping the font assets solved half the duplication. The other half was related batched UI
          material that samples six font atlases. 2 language types * 3 weights. Those were packed as
          individual textures on one shared material, which was used across the whole UI to keep draw calls
          low. The naive fix was a <code>Texture2DArray</code> built at import time, copying every
          atlas into one array texture. That works, but it at the cost of every atlas being copied:
          one inside each <code>TMP_FontAsset</code>, and one duplicated into the array.
        </p>
        <p>
          To fix the issue I ensured the material's atlas slots are populated through <code>OnGUI</code>-stage code for batched UI material
          that reads each atlas directly off the live <code>TMP_FontAsset</code> objects and assigns
          them straight onto the material's texture properties. No array, no copy, the material
          points at the same atlas textures the font assets already own in memory. That way, the font assets
          stay the single place and batched material just has references to them.
        </p>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Technical Highlights</h2>

      <div class="tech-grid">
        <div class="tech-card">
          <div class="tech-icon">✂️</div>
          <h4>Pre-build Stripping</h4>
          <p>Nulls font and material refs before build</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🔁</div>
          <h4>Runtime Loading</h4>
          <p>Restores refs from Addressables at load</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🕸️</div>
          <h4>Dependency Graph Walk</h4>
          <p>Validates Resources, Scenes, Shaders, Preloaded Assets</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🧩</div>
          <h4>Nested Prefab Convergence</h4>
          <p>Iterates until base prefabs are clean too</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🖼️</div>
          <h4>Direct Atlas Binding</h4>
          <p>No Texture2DArray copy for batched UI material</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">📋</div>
          <h4>Remap Table</h4>
          <p>Records every stripped reference to restore later</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🚧</div>
          <h4>Build-time Failure</h4>
          <p>Fail with the exact dependency chain</p>
        </div>
      </div>

      <div class="references-grid">
        <div class="reference-card">
          <h3>The Unresolved Upstream Issue</h3>
          <ul class="reference-links">
            <li><a href="https://discussions.unity.com/t/textmesh-pro-font-assets-duplicated-in-memory-resources-assetbundle/738373" target="_blank">TextMesh Pro: Font assets duplicated in memory (Resources & AssetBundle)</a></li>
            <li><a href="https://discussions.unity.com/t/bug-1-2-4-duplicate-textmeshpro-assets-in-bundles/760299" target="_blank">[Bug 1.2.4] Duplicate TextMeshPro assets in bundles</a></li>
            <li><a href="https://discussions.unity.com/t/textmeshpro-addressables-asset-bundles/855482" target="_blank">TextMeshPro & Addressables (Asset Bundles)</a></li>
          </ul>
        </div>

        <div class="reference-card">
          <h3>Tools & Systems</h3>
          <ul class="reference-links">
            <li><a href="https://docs.unity3d.com/Packages/com.unity.textmeshpro@latest" target="_blank">TextMesh Pro</a></li>
            <li><a href="https://docs.unity3d.com/Packages/com.unity.addressables@latest" target="_blank">Addressables</a></li>
            <li><a href="https://docs.unity3d.com/Manual/com.unity.memoryprofiler.html" target="_blank">Unity Memory Profiler</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FontRamOptimization',
  data() {
    return {
      activeStageIndex: 0,
      stages: [
        {
          id: "problem",
          title: "The Setup",
          description: "TMP requires fonts referenced via rich-text tags or TMP Settings defaults to live in a Resources folder, which Unity embeds in every build unconditionally. Addressables separately packs any font reachable from a scene or prefab into its own bundle group. A font satisfying both conditions loads twice."
        },
        {
          id: "cost",
          title: "The Cost",
          description: "Each TMP_FontAsset carries an SDF atlas texture and, for multi-language UI, a chain of fallback fonts. On a quest-class headset sharing a single RAM pool between CPU and GPU, two resident copies of the same atlas set is pure waste — memory that could go to texture streaming or render targets instead."
        },
        {
          id: "strip",
          title: "Pre-build Stripping",
          description: "Before the build, an editor step walks every Resources folder, build scene, preloaded asset, and always-included shader, finds every reference to a tracked font or font material, records its exact location in a remap table, and nulls the reference so it can't be pulled into the build twice."
        },
        {
          id: "rehydrate",
          title: "Runtime Re-hydration",
          description: "After the player loads, a small component reads the remap table and loads each stripped font back in from its addressable address, assigning it onto the exact component and property path it was stripped from. The game never sees a missing font; the build never carries a duplicate."
        },
        {
          id: "validate",
          title: "Build-time Validation",
          description: "A second build step re-walks the same root surfaces after stripping and fails the build if any of them still transitively reaches a forbidden font or material, printing the full dependency chain so the offending prefab is obvious immediately, not three profiling sessions later."
        },
        {
          id: "atlas",
          title: "The Atlas Side-channel",
          description: "A single batched UI material samples six font atlases directly off their live TMP_FontAsset objects instead of duplicating them into a Texture2DArray, closing the one duplication path that font stripping alone couldn't reach."
        }
      ]
    };
  },
  computed: {
    activeStage() {
      return this.stages[this.activeStageIndex];
    }
  },
  methods: {
    setActiveStage(index) {
      this.activeStageIndex = index;
    }
  }
};
</script>

<style scoped>

.fontram-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #213547;
}

code {
  background: var(--vp-c-bg-soft);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--vp-c-brand);
}

/* Header Styles */
.project-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.project-header h1 {
  font-size: 3rem;
  line-height: 1.2;
  padding-bottom: 0.1em;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.project-tagline {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0 auto 1.5rem;
}

.project-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.github-btn {
  background: linear-gradient(135deg, #646cff, #535bf2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(100, 108, 255, 0.15);
}

.github-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(100, 108, 255, 0.25);
  color: white;
}

.github-icon {
  width: 20px;
  height: 20px;
  fill: white;
}

/* Section Styles */
.section {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
}

.section-description {
  margin-bottom: 2rem;
  color: var(--vp-c-text-2);
}

/* Overview Cards */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  border-radius: 10px;
  padding: 0.4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 3px solid rgba(100, 108, 255, 0.3);
  background: var(--vp-c-bg-soft);
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-color: rgba(100, 108, 255, 0.8);
}

.feature-card h3 {
  color: var(--vp-c-brand);
}
.feature-card p {
  color: var(--vp-c-text-2);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
}

.tech-card {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.2rem;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.tech-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-3px);
}

.tech-icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.tech-card h4 {
  color: var(--vp-c-text-1);
  margin: 0 0 0.3rem 0;
  font-size: 0.95rem;
}

.tech-card p {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  margin: 0;
}

.rendering-stages {
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.stage-navigator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.stage-names {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
}

.stage-name {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  background: #e2e8f0;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  font-size: 0.9rem;
  font-weight: 500;
}

.stage-name.active, .stage-name:hover {
  background: #646cff;
  color: white;
  border-color: #646cff;
}

.stage-viewer {
  position: relative;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  background: #0f172a;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.text-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.stage-text-content {
  max-width: 640px;
  text-align: center;
}

.stage-text-content h4 {
  color: #ffffff;
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.stage-text-content p {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.7;
}

/* Graph Placeholder */
.graph-placeholder {
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  background: var(--vp-c-bg-soft);
  border: 2px dashed rgba(100, 108, 255, 0.35);
}

.graph-placeholder-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.graph-placeholder-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.graph-placeholder-subtitle {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Project Story */
.project-story h3 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
}

.project-story p {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
}

.challenges {
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(100, 108, 255, 0.1);
}

.challenges h4 {
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
  font-size: 1.3rem;
}

.challenge-list {
  list-style-type: none;
  margin-left: 1.5rem;
}

.challenge-list li {
  padding: 0.6rem 0;
  position: relative;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.challenge-list li::before {
  content: "•";
  color: var(--vp-c-brand);
  position: absolute;
  left: -1.5rem;
  top: 0.2rem;
  font-size: 1.5rem;
}

/* Libraries & References */
.references-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.reference-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.reference-card h3 {
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
  margin-top: 0;
}

.reference-links {
  list-style-type: none;
}

.reference-links li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--vp-c-brand);
}

.reference-links li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
}

.reference-links a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
}

.reference-links a:hover {
  color: #646cff;
  text-decoration: underline;
}

/* Future Plans / Still Open */
.future-plans {
  background: linear-gradient(to right, #f1f5f9, #ffffff);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.future-plans h2 {
  text-align: center;
  color: var(--vp-c-brand-2);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.future-plans ul {
  list-style-type: none;
  padding-left: 1.5rem;
}

.future-plans li {
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.future-plans li::before {
  content: "▹";
  color: #646cff;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .stage-viewer {
    height: 400px;
  }

  .stage-names {
    gap: 0.3rem;
  }

  .stage-name {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stage-text-content h4 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .fontram-container {
    padding: 1.5rem;
  }

  .project-header h1 {
    font-size: 1.8rem;
  }

  .project-tagline {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .stage-viewer {
    height: 320px;
  }

  .references-grid {
    grid-template-columns: 1fr;
  }

  .graph-placeholder {
    padding: 2.5rem 1.5rem;
  }
}
</style>