<template>
  <div class="forefront-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Forefront</h1>
      <p class="project-tagline">Optimization & graphics programming at Triangle Factory</p>
      <div class="project-meta">
        <a
            href="https://www.triangle-factory.be/forefront"
            class="github-btn"
            target="_blank"
        >
          <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.5 8 12 11.82 4.5 8 12 4.18zM4 9.7l7 3.5v7.6l-7-3.5V9.7zm9 11.1v-7.6l7-3.5v7.6l-7 3.5z"/>
          </svg>
          View on Triangle Factory
        </a>
      </div>
    </div>

    <!-- Trailer -->
    <div class="section">
      <div class="video-container">
        <iframe
            class="trailer-frame"
            src="https://www.youtube.com/embed/M11IZk0RmaQ?rel=0&controls=1"
            title="Forefront trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Project Overview -->
    <div class="section">
      <h2 class="section-title">About the Project</h2>
      <p class="section-description">
        Forefront is a 32-player VR battle game from Triangle Factory, the studio behind
        Breachers and Hyper Dash. Players take sides in a war between O.R.E. and the local
        armies and governments, fighting across large, semi-destructible environments built
        for squad-scale combat — available on Meta Quest, Steam, PlayStation, and Pico.
      </p>
      <p class="section-description">
        I started at Triangle Factory in February 2026, first as an intern and now in a student
        position, working on optimization and graphics programming for Forefront. Most of that
        work doesn't fit neatly into a single feature — it's the kind of thing that shows up as
        a build that's smaller, a frame that's faster, or a crash that no longer happens. The
        posts below go into the specifics.
      </p>
    </div>

    <!-- Related Blog Posts -->
    <div class="section">
      <h2 class="section-title">Related Posts</h2>
      <div class="post-list">
        <div class="post-card" @click="goTo('/projects/blog-font-deduplication')">
          <div class="post-card-meta">
            <span class="post-date">21/06/2026</span>
            <span class="post-tags">
              <span class="post-tag">Unity</span>
              <span class="post-tag">VR</span>
              <span class="post-tag">Optimization</span>
            </span>
          </div>
          <h3 class="post-title">Font RAM Optimization in Unity</h3>
          <p class="post-excerpt">
            TextMesh Pro requires fonts referenced via rich-text tags or settings defaults to
            live in a Resources folder, while Addressables pulls the same fonts into its own
            bundles. Here is how I tracked down every place that duplication hides, and stripped
            it out before each build.
          </p>
          <span class="post-read-more">
            Read post
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>

        <div class="post-card post-card-upcoming">
          <div class="post-card-meta">
            <span class="post-date post-date-upcoming">Coming soon</span>
            <span class="post-tags">
              <span class="post-tag">Unity</span>
              <span class="post-tag">Compute Shaders</span>
              <span class="post-tag">Rendering</span>
            </span>
          </div>
          <h3 class="post-title">Far LOD Batching with Compute Shaders & Indirect Drawing</h3>
          <p class="post-excerpt">
            Batching far-LOD meshes on the GPU with compute shaders and indirect
            draw calls, cutting CPU overhead on VR platforms where main thread matters.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForefrontProject',
  methods: {
    goTo(link) {
      window.location.href = link;
    }
  }
};
</script>

<style scoped>

.forefront-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #213547;
}

/* Header Styles */
.project-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.project-header h1 {
  font-size: 3rem;
  line-height: 1.3;
  padding-bottom: 0.15em;
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
  margin-bottom: 1.2rem;
  color: var(--vp-c-text-2);
  text-align: center;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

/* Video */
.video-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: #0f172a;
}

.trailer-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  border: none;
}

/* Post List (reused blog-card styling) */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-card {
  display: block;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.8rem 2rem;
  border: 3px solid rgba(100, 108, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-color: rgba(100, 108, 255, 0.8);
}

.post-card-upcoming {
  border-style: dashed;
  border-color: rgba(100, 108, 255, 0.4);
}

.post-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.post-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.post-date-upcoming {
  color: var(--vp-c-brand);
  font-weight: 600;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: rgba(100, 108, 255, 0.12);
  color: var(--vp-c-brand);
}

.post-title {
  font-size: 1.5rem;
  margin: 0 0 0.7rem 0;
  color: var(--vp-c-text-1);
}

.post-excerpt {
  color: var(--vp-c-text-2);
  margin: 0 0 1.2rem 0;
  line-height: 1.7;
}

.post-read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  color: var(--vp-c-brand);
  font-size: 0.95rem;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.post-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .post-card {
    padding: 1.4rem 1.5rem;
  }

  .post-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .forefront-container {
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

  .post-card-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>