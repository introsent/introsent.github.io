<template>
  <div class="salamander-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Salamander</h1>
      <p class="project-tagline">A Vulkan-based 3D rendering engine built with C++20</p>
      <div class="project-meta">
        <a
            href="https://github.com/introsent/Salamander.git"
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
        Salamander is a 3D rendering engine built with Vulkan using C++20. Developed as a university project for the <strong>Graphics Programming 2</strong> course at Howest University, it demonstrates the capabilities of the Vulkan framework while adhering to modern design practices.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Modern Rendering</h3>
          <p>Deferred rendering pipeline with HDR and tone mapping for realistic lighting.</p>
        </div>
        <div class="feature-card">
          <h3>Advanced Lighting</h3>
          <p>Directional and omni lights with shadow mapping and Image-Based Lighting (IBL).</p>
        </div>
        <div class="feature-card">
          <h3>Optimization</h3>
          <p>Double buffering, depth prepass, and mipmap generation for improved performance.</p>
        </div>
      </div>
    </div>


    <!-- Rendering Pipeline -->
    <div class="section">
      <h2 class="section-title">Rendering Pipeline</h2>
      <div class="rendering-stages">
        <div class="stage-navigator">
          <div class="stage-names">
            <div
                v-for="(stage, index) in stages"
                :key="stage.id"
                class="stage-name"
                :class="{ active: activeStageIndex === index }"
                @click="setActiveStage(index)"
            >
              {{ stage.title }}
            </div>
          </div>
        </div>

        <div class="stage-viewer">
          <img
              :src="activeStage.image"
              :alt="activeStage.title"
              class="stage-image"
          />
        </div>
      </div>
    </div>
    <!-- Automatic Exposure Demo -->
    <div class="section">
      <h2 class="section-title">Automatic Camera Exposure</h2>
      <p class="section-description">
        The engine features automatic exposure adjustment that dynamically adapts to scene brightness, simulating how a real camera or the human eye responds to changing light conditions.
      </p>
      <div class="video-container">
        <video
            class="demo-video"
            autoplay
            muted
            loop
            playsinline
            controls
        >
          <source src="/videos/salamander_automatic_exposure.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>


    <!-- Project Story -->
    <div class="section">
      <div class="project-story">
        <h3>The Salamander Journey</h3>
        <p>
          Development of Salamander started in February 2025 as a part of university course called Graphics Programming 2.
          It thought me a lot about how modern graphics APIs work and what it takes to render simple triangle on the GPU,
          as well as graphics techniques commonly used in rendering nowadays, such as HDR/tone mapping, IBL, shadow mapping.
          Later on I started expanding project myself. Proper refactoring, new graphics features as automatic camera exposure and etc.
        </p>

        <div class="challenges">
          <h4>Technical Challenges Overcome</h4>
          <ul class="challenge-list">
            <li>Vulkan's explicit memory management required careful handling of resources and layouts</li>
            <li>Debugging complex synchronization issues between rendering passes</li>
            <li>Implementing physically-based rendering with accurate material properties</li>
            <li>Optimizing shadow mapping techniques for directional lights</li>
            <li>Fixing bugs related to memory layouts, normals, and sampling methods</li>
          </ul>
        </div>

        <p>
          Despite these challenges, Salamander became not only a lesson to me, but a modern rendering platform, that will be expanded and maybe released one day.
        </p>
      </div>
    </div>

    <!-- Technical Highlights -->
    <div class="section">
      <h2 class="section-title">Technical Highlights</h2>

      <div class="tech-grid">
        <div class="tech-card">
          <div class="tech-icon">⚡</div>
          <h4>Synchronization 2</h4>
          <p>Efficient resource management</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🔄</div>
          <h4>Dynamic Rendering</h4>
          <p>Flexible pipeline creation</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">📐</div>
          <h4>Vertex Pulling</h4>
          <p>GPU addresses for efficient geometry</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">💡</div>
          <h4>Deferred Rendering</h4>
          <p>Complex lighting scenarios</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">✂️</div>
          <h4>Alpha Cutout</h4>
          <p>Complex material support</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🖼️</div>
          <h4>Mipmap Generation</h4>
          <p>Improved texture quality</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">📷</div>
          <h4>Auto Exposure</h4>
          <p>Realistic light adaptation</p>
        </div>
      </div>

      <div class="references-grid">
        <div class="reference-card">
          <h3>Scene References</h3>
          <ul class="reference-links">
            <li><a href="https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/Sponza" target="_blank">Sponza Scene</a></li>
            <li><a href="https://polyhaven.com/a/circus_arena" target="_blank">Circus Arena Environment</a></li>
            <li><a href="https://polyhaven.com/a/bambanani_sunset" target="_blank">Bambanani Sunset HDR</a></li>
          </ul>
        </div>

        <div class="reference-card">
          <h3>Libraries & Tools</h3>
          <ul class="reference-links">
            <li><a href="https://vulkan.lunarg.com/" target="_blank">Vulkan SDK</a></li>
            <li><a href="https://www.glfw.org/" target="_blank">GLFW</a></li>
            <li><a href="https://github.com/g-truc/glm" target="_blank">GLM</a></li>
            <li><a href="https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator" target="_blank">VMA</a></li>
            <li><a href="https://github.com/nothings/stb" target="_blank">stb_image</a></li>
            <li><a href="https://github.com/syoyo/tinygltf" target="_blank">tinygltf</a></li>
            <li><a href="https://assimp.org/" target="_blank">assimp</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalamanderProject',
  data() {
    return {
      activeStageIndex: 0,
      stages: [
        {
          id: "depth",
          title: "Depth Prepass",
          description: "The initial depth-only pass that optimizes subsequent rendering stages by determining visibility early in the pipeline.",
          image: "/images/salamander/depth_prepass.png"
        },
        {
          id: "albedo",
          title: "Albedo Map",
          description: "Stores the base color of surfaces without lighting information, representing the diffuse reflectivity.",
          image: "/images/salamander/albedo.png"
        },
        {
          id: "normal",
          title: "Normal Map",
          description: "Encodes surface orientation information used for detailed lighting calculations.",
          image: "/images/salamander/normal_map.png"
        },
        {
          id: "roughness",
          title: "Roughness Map",
          description: "Defines the microsurface characteristics that affect how light scatters on the material.",
          image: "/images/salamander/roughness.png"
        },
        {
          id: "lighting",
          title: "Lighting Pass (HDR)",
          description: "Combines all lighting contributions in high dynamic range, preserving details in bright and dark areas.",
          image: "/images/salamander/lighting_pass.png"
        },
        {
          id: "post",
          title: "Post-processing",
          description: "Applies tone mapping and exposure adjustments to convert HDR to displayable range.",
          image: "/images/salamander/blit_pass.png"
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

.video-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: #0f172a;
}

.demo-video {
  width: 100%;
  display: block;
}

.salamander-container {
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
  line-height: 1.2;
  padding-bottom: 0.1em;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
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
.feature-card p
{
  color: var(--vp-c-text-2);
}
/* Rendering Stages */
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
  color: var(--vp-c-brand);
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

/* Future Plans */
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
  .salamander-container {
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