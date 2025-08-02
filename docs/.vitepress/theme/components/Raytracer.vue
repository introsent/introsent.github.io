<template>
  <div class="raytracer-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>CPU Raytracer</h1>
      <p class="project-tagline">A C++ implementation of a basic raytracer with global illumination rendering</p>
      <div class="project-meta">
        <a
            href="https://github.com/introsent/Raytracer"
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
        This C++ raytracer simulates the physical properties of light and its interaction with 3D objects,
        implementing a global illumination rendering algorithm that accurately models light transport.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Raytracing Algorithm</h3>
          <p>Simulates bouncing of light rays with recursive tracing for reflections and refractions.</p>
        </div>
        <div class="feature-card">
          <h3>Geometric Primitives</h3>
          <p>Supports spheres, planes, cylinders, and complex models like the Stanford Bunny.</p>
        </div>
        <div class="feature-card">
          <h3>Lighting & Material</h3>
          <p>Implements ambient, diffuse lighting with material properties including reflection.</p>
        </div>
      </div>
    </div>

    <!-- Example Scenes -->
    <div class="section">
      <h2 class="section-title">Example Scenes</h2>
      <div class="rendering-stages">
        <div class="stage-navigator">
          <div class="stage-names">
            <div
                v-for="(scene, index) in scenes"
                :key="scene.id"
                class="stage-name"
                :class="{ active: activeSceneIndex === index }"
                @click="setActiveScene(index)"
            >
              {{ scene.title }}
            </div>
          </div>
        </div>

        <div class="stage-viewer">
          <img
              :src="activeScene.image"
              :alt="activeScene.title"
              class="stage-image"
          />
        </div>
      </div>
    </div>

    <!-- Project Story -->
    <div class="section">
      <div class="project-story">
        <h3>The Raytracing Journey</h3>
        <p>
          Developing this CPU raytracer was an exciting dive into the fundamentals of computer graphics.
          Implementing the core algorithms from scratch provided deep insights into light transport,
          material properties, and computational optimization.
        </p>

        <div class="challenges">
          <h4>Technical Challenges Overcome</h4>
          <ul class="challenge-list">
            <li>Implementing efficient ray-object intersection algorithms</li>
            <li>Optimizing recursive ray tracing for complex scenes</li>
            <li>Developing physically accurate material and lighting models</li>
            <li>Handling complex geometry like the Stanford Bunny</li>
            <li>Balancing rendering quality with performance constraints</li>
          </ul>
        </div>

        <p>
          Despite the computational demands of CPU-based raytracing, the project demonstrates
          impressive visual results and serves as a solid foundation for understanding
          modern rendering techniques.
        </p>
      </div>
    </div>

    <!-- Technical Highlights -->
    <div class="section">
      <h2 class="section-title">Technical Highlights</h2>

      <div class="challenges">
        <h4>Core Raytracing Features</h4>
        <ul class="challenge-list">
          <li>Recursive ray tracing with configurable depth</li>
          <li>Support for multiple geometric primitives</li>
          <li>Physically-based material properties</li>
          <li>Ambient and diffuse lighting models</li>
          <li>Basic anti-aliasing implementation</li>
        </ul>
      </div>

      <div class="references-grid">
        <div class="reference-card">
          <h3>Scene References</h3>
          <ul class="reference-links">
            <li><a href="https://github.com/introsent/Raytracer" target="_blank">Project Repository</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)" target="_blank">Ray Tracing Concepts</a></li>
            <li><a href="https://graphics.stanford.edu/data/3Dscanrep/" target="_blank">Stanford 3D Models</a></li>
          </ul>
        </div>

        <div class="reference-card">
          <h3>Libraries & Tools</h3>
          <ul class="reference-links">
            <li>C++17 Standard</li>
            <li>CMake Build System</li>
            <li>STL for core functionality</li>
            <li>GLM for vector mathematics</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaytracerProject',
  data() {
    return {
      activeSceneIndex: 0,
      scenes: [
        {
          id: "reference",
          title: "Reference Scene",
          description: "Reference scene with basic primitives including spheres, planes and cylinders",
          image: "/images/raytracer/reference_scene.png"
        },
        {
          id: "bunny",
          title: "Bunny Scene",
          description: "Stanford Bunny scene demonstrating complex geometry handling",
          image: "/images/raytracer/bunny_scene.png"
        }
      ]
    };
  },
  computed: {
    activeScene() {
      return this.scenes[this.activeSceneIndex];
    }
  },
  methods: {
    setActiveScene(index) {
      this.activeSceneIndex = index;
    }
  }
};
</script>

<style scoped>
.raytracer-container {
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
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #646cff, #535bf2);
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
  padding: 0.7rem;
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

/* Example Scenes */
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

.stage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  color: var(--vp-c-text-1);
}

.reference-links li::before {
  content: "→";
  position: absolute;
  left: 0;
  color:  var(--vp-c-brand);
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

/* Responsive Design */
@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .stage-viewer {
    height: 350px;
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
}

@media (max-width: 480px) {
  .raytracer-container {
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
    height: 250px;
  }

  .references-grid {
    grid-template-columns: 1fr;
  }
}
</style>