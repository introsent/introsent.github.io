<template>
  <div class="ppga-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>PPGA Racing</h1>
      <p class="project-tagline">A racing game using Plane-Based Projective Geometric Algebra instead of matrices</p>
      <div class="project-meta">
        <a
            href="https://github.com/introsent/PPGA-project"
            class="github-btn"
            target="_blank"
        >
          <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>

    <!-- Project Overview -->
    <div class="section">
      <h2 class="section-title">Project Overview</h2>
      <p class="section-description">
        This innovative racing game uses Plane-Based Projective Geometric Algebra (PPGA) instead of traditional matrix transformations.
        It demonstrates how sandwich products can replace matrix operations for transformations in game development.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>PPGA Mathematics</h3>
          <p>Uses geometric algebra instead of matrices for all transformations</p>
        </div>
        <div class="feature-card">
          <h3>Sandwich Product</h3>
          <p>Employs the sandwich product for rotations and translations</p>
        </div>
        <div class="feature-card">
          <h3>3-Car Racing</h3>
          <p>Features player-controlled car and two AI opponents</p>
        </div>
      </div>
    </div>

    <!-- Game Showcase -->
    <div class="section">
      <h2 class="section-title">Game Showcase</h2>
      <div class="video-container">
          <div class="placeholder-video">
            <video
                src="/videos/ppga.mp4"
                muted
                loop
                playsinline
                autoplay
                preload="auto"
            />
          </div>
      </div>
    </div>

    <!-- PPGA Explanation -->
    <div class="section">
      <h2 class="section-title">Plane-Based Projective Geometric Algebra</h2>
      <div class="project-story">
        <p>
          PPGA is a cutting-edge mathematical framework that uses geometric algebra instead of traditional matrix transformations.
          Instead of using transformation matrices for rotations, translations, and scaling, PPGA uses multivectors and sandwich products.
        </p>

        <div class="ppga-comparison">
          <div class="comparison-card">
            <h4>Traditional Approach</h4>
            <ul class="comparison-list">
              <li>Uses 4x4 transformation matrices</li>
              <li>Matrix multiplication for transformations</li>
              <li>Separate matrices for each transformation type</li>
              <li>Requires matrix inversion for certain operations</li>
            </ul>
          </div>
          <div class="comparison-card">
            <h4>PPGA Approach</h4>
            <ul class="comparison-list">
              <li>Uses multivectors to represent objects and transformations</li>
              <li>Sandwich product (versor) for all transformations</li>
              <li>Unified representation for rotations, translations, etc.</li>
              <li>More intuitive geometric operations</li>
            </ul>
          </div>
        </div>

        <div class="tech-details">
          <h4>Technical Implementation</h4>
          <ul class="tech-list">
            <li>All car movements controlled through PPGA operations</li>
            <li>Camera transformations implemented with sandwich products</li>
            <li>Physics calculations using geometric algebra</li>
            <li>No matrix libraries used in the entire project</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Game Features -->
    <div class="section">
      <h2 class="section-title">Game Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Player Controls</h3>
          <p>Mouse-based steering - click where you want the car to rotate toward</p>
        </div>
        <div class="feature-card">
          <h3>Speed Control</h3>
          <p>Dynamic acceleration and braking mechanics</p>
        </div>
        <div class="feature-card">
          <h3>AI Opponents</h3>
          <p>Two AI-controlled cars with pathfinding logic</p>
        </div>
        <div class="feature-card">
          <h3>PPGA Camera</h3>
          <p>Camera movement implemented with geometric algebra</p>
        </div>
      </div>
    </div>

    <!-- PDF Documentation -->
    <div class="section">
      <h2 class="section-title">Project Documentation</h2>
      <div class="pdf-container">
        <div class="pdf-placeholder">
          <i class="fas fa-file-pdf"></i>
          <p>PPGA Implementation Details</p>
          <a href="/pdf/ppga_calculations.pdf" class="download-btn">Download PDF</a>
        </div>
      </div>
    </div>

    <!-- Technical Highlights -->
    <div class="section">
      <h2 class="section-title">Technical Highlights</h2>

      <div class="references-grid">
        <div class="reference-card">
          <h3>PPGA Concepts</h3>
          <ul class="reference-links">
            <li>Multivectors for space representation</li>
            <li>Sandwich product for transformations</li>
            <li>Versors for combined transformations</li>
            <li>Outer product for geometric constructions</li>
          </ul>
        </div>

        <div class="reference-card">
          <h3>Game Implementation</h3>
          <ul class="reference-links">
            <li>Pure C++ implementation</li>
            <li>Custom geometric algebra library</li>
            <li>No matrix operations used</li>
            <li>Real-time performance optimization</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PPGAProject'
};
</script>

<style scoped>
.ppga-container {
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
  border-radius: 16px;
  color: white;
  padding: 2rem;
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
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 3px solid rgba(100, 108, 255, 0.1);
  text-align: center;
  background: var(--vp-c-bg-soft);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-color: rgba(100, 108, 255, 0.3);
}

.feature-card h3 {
  color: var(--vp-c-brand);
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

/* Video Container */
.video-container {
  border-radius: 12px;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: var(--vp-c-bg-soft);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-video {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  text-align: center;
  color: var(--vp-c-text-2);
}

.placeholder-content i {
  font-size: 5rem;
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
}

/* Project Story */
.project-story h3 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-brand);
}

.project-story p {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.ppga-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.comparison-card {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.5rem;
  border: 3px solid rgba(100, 108, 255, 0.1);
  transition: all 0.3s ease;
}

.comparison-card:hover {
  border: 3px solid rgba(100, 108, 255, 0.3);
  transform: translateY(-5px);
}

.comparison-card h4 {
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  text-align: center;
}

.comparison-list {
  list-style-type: none;
  margin-left: 1.5rem;
}

.comparison-list li {
  padding: 0.6rem 0;
  position: relative;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.comparison-list li::before {
  content: "•";
  color: var(--vp-c-brand);
  position: absolute;
  left: -1.5rem;
  top: 0.2rem;
  font-size: 1.5rem;
}

.tech-details {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  border-left: 4px solid var(--vp-c-brand);
}

.tech-details h4 {
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
}

.tech-list {
  list-style-type: none;
  margin-left: 1.5rem;
}

.tech-list li {
  padding: 0.6rem 0;
  position: relative;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.tech-list li::before {
  content: "•";
  color: var(--vp-c-brand);
  position: absolute;
  left: -1.5rem;
  top: 0.2rem;
  font-size: 1.5rem;
}

/* PDF Container */
.pdf-container {
  border-radius: 12px;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: var(--vp-c-bg-soft);
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pdf-placeholder {
  text-align: center;
  padding: 2rem;
}

.pdf-placeholder i {
  font-size: 5rem;
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
}

.pdf-placeholder p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.download-btn {
  background: linear-gradient(135deg, #646cff, #535bf2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(100, 108, 255, 0.25);
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
  padding: 2rem;
  border: 3px solid rgba(100, 108, 255, 0.1);
  transition: all 0.3s ease;
}

.reference-card:hover {
  border: 3px solid rgba(100, 108, 255, 0.3);
}

.reference-card h3 {
  color: var(--vp-c-brand);
  padding-bottom: 0.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.reference-links {
  list-style-type: none;
}

.reference-links li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--vp-c-text-2);
}

.reference-links li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .ppga-container {
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

  .references-grid {
    grid-template-columns: 1fr;
  }
}
</style>