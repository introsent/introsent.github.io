<template>
  <div class="dual-rasterizer-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Dual Rasterizer</h1>
      <p class="project-tagline">A dual-mode 3D rasterizer supporting both hardware-accelerated (DirectX 11) and software-based (CPU) rendering</p>
      <div class="project-meta">
        <a
            href="https://github.com/introsent/Dual-Rasterizer"
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
        The Dual Rasterizer offers a flexible 3D rendering framework that can switch between hardware-accelerated (DirectX 11)
        and software-based (CPU) rendering at runtime to compare performance and visual output.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
          </div>
          <h3>Hardware Rendering</h3>
          <p>Leverages DirectX 11 GPU pipeline for accelerated rendering with advanced features.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
          </div>
          <h3>Software Rendering</h3>
          <p>Custom CPU-based rasterizer implementing fundamental graphics pipeline concepts.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
          </div>
          <h3>Shading Techniques</h3>
          <p>Multiple shading modes including combined, observed area, diffuse, and specular.</p>
        </div>
      </div>
    </div>

    <!-- Rendering Comparison -->
    <div class="section">
      <h2 class="section-title">Rendering Comparison</h2>
      <p class="section-description">
        Drag the slider to compare hardware-accelerated rendering (DirectX 11) with software-based rendering (CPU)
      </p>

      <div class="comparison-container" ref="comparisonContainer">
        <!-- FIXED: Hardware image container with clip-path -->
        <div class="image-container hardware-image" :style="{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }">
          <img :src="renderingModes[0].image" alt="Hardware Rendering" class="comparison-image">
          <div class="mode-label hardware-label">HARDWARE RENDERING</div>
        </div>

        <!-- FIXED: Software image as background -->
        <div class="image-container software-image">
          <img :src="renderingModes[1].image" alt="Software Rendering" class="comparison-image">
          <div class="mode-label software-label">SOFTWARE RENDERING</div>
        </div>

        <div class="slider-handle"
             :style="{ left: sliderPosition + '%' }"
             @mousedown="startDrag"
             @touchstart="startDrag">
          <div class="slider-icon">↔</div>
        </div>
      </div>
    </div>

    <!-- Key Features -->
    <div class="section">
      <h2 class="section-title">Key Features</h2>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Shading Techniques</h3>
          <ul class="feature-list">
            <li>Combined (Diffuse + Specular)</li>
            <li>Observed Area (Ambient Occlusion)</li>
            <li>Diffuse only</li>
            <li>Specular only</li>
          </ul>
        </div>
        <div class="feature-card">
          <h3>Texture Mapping</h3>
          <ul class="feature-list">
            <li>UV interpolation</li>
            <li>Normal mapping support</li>
            <li>Transparent Fire Effect</li>
            <li>Alpha blending</li>
          </ul>
        </div>
        <div class="feature-card">
          <h3>Visualization & Debugging</h3>
          <ul class="feature-list">
            <li>Depth buffering visualization</li>
            <li>Bounding box visualization</li>
            <li>Camera system with configurable matrices</li>
            <li>Culling modes (Back, Front, None)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="section">
      <h2 class="section-title">Interactive Controls</h2>

      <div class="controls-container">
        <div class="controls-grid">
          <div v-for="(control, index) in controls" :key="index" class="control-card">
            <div class="key">{{ control.key }}</div>
            <div class="function">{{ control.function }}</div>
            <div class="mode">{{ control.mode }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technical Details -->
    <div class="section">
      <h2 class="section-title">Technical Details</h2>

      <div class="details-grid">
        <div class="detail-card">
          <h3>Software Rasterizer</h3>
          <ul class="detail-list">
            <li>Custom vertex shader equivalent on CPU</li>
            <li>Barycentric coordinate-based triangle rasterization</li>
            <li>Z-buffer implementation with per-pixel depth testing</li>
            <li>UV coordinate interpolation and sampling</li>
            <li>Normal mapping for enhanced surface detail</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>Hardware Renderer</h3>
          <ul class="detail-list">
            <li>DirectX 11 device and swap chain configuration</li>
            <li>HLSL vertex and pixel shaders</li>
            <li>Sampler states (Point, Linear, Anisotropic)</li>
            <li>Depth stencil for depth testing</li>
            <li>Render-to-texture for effects</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DualRasterizerProject',
  data() {
    return {
      sliderPosition: 50,
      isDragging: false,
      activeModeIndex: 0,
      renderingModes: [
        {
          id: "hardware",
          title: "Hardware Rendering",
          description: "DirectX 11 GPU-accelerated rendering with advanced features and effects.",
          image: "/images/rasterizer/hardware.png"
        },
        {
          id: "software",
          title: "Software Rendering",
          description: "Custom CPU-based rasterizer demonstrating fundamental graphics pipeline concepts.",
          image: "/images/rasterizer/software.png"
        }
      ],
      controls: [
        { key: "F1", function: "Toggle Rasterizer Mode (HARDWARE/SOFTWARE)", mode: "Shared" },
        { key: "F2", function: "Toggle Vehicle Rotation", mode: "Shared" },
        { key: "F3", function: "Toggle FireFX", mode: "Shared" },
        { key: "F4", function: "Cycle Sampler State", mode: "Hardware" },
        { key: "F5", function: "Cycle Shading Mode", mode: "Software" },
        { key: "F6", function: "Toggle NormalMap", mode: "Software" },
        { key: "F7", function: "Toggle DepthBuffer Visualization", mode: "Software" },
        { key: "F8", function: "Toggle BoundingBox Visualization", mode: "Software" },
        { key: "F9", function: "Cycle CullMode", mode: "Shared" },
        { key: "F10", function: "Toggle Uniform ClearColor", mode: "Shared" },
        { key: "F11", function: "Toggle Print FPS", mode: "Shared" }
      ]
    };
  },
  computed: {
    activeMode() {
      return this.renderingModes[this.activeModeIndex];
    }
  },
  methods: {
    startDrag(e) {
      e.preventDefault();
      this.isDragging = true;
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.stopDrag);
    },
    onDrag(e) {
      if (!this.isDragging) return;

      const container = this.$refs.comparisonContainer;
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);

      if (clientX) {
        let x = clientX - rect.left;
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        this.sliderPosition = (x / rect.width) * 100;
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
      document.removeEventListener('touchmove', this.onDrag);
      document.removeEventListener('touchend', this.stopDrag);
    }
  }
};
</script>

<style scoped>
/* Fixed CSS for comparison slider */
.dual-rasterizer-container {
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


.project-tagline {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0 auto 1.5rem;
  max-width: 800px;
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
  margin-right: 10px;
}

/* FIXED: Rendering Comparison */
.comparison-container {
  position: relative;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  margin: 3rem 0;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hardware-image {
  z-index: 2;
}

.software-image {
  z-index: 1;
}

.comparison-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slider-handle {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 4px;
  background: #fff;
  cursor: col-resize;
  z-index: 3;
  transform: translateX(-50%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-icon {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #646cff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.mode-label {
  position: absolute;
  top: 20px;
  padding: 8px 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  border-radius: 4px;
  z-index: 4;
}

.hardware-label {
  left: 20px;
}

.software-label {
  right: 20px;
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
  position: relative;
  padding-bottom: 1rem;
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
  padding: 0.8rem;
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

.feature-icon {
  font-size: 2.5rem;
  color: #646cff;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--vp-c-brand);
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.feature-list {
  text-align: left;
  color: var(--vp-c-text-2);
  list-style-type: none;
  padding-left: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.feature-list li::before {
  content: "•";
  color: #646cff;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

/* Controls */
.controls-container {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.control-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
}

.control-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.key {
  background: #646cff;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.function {
  flex-grow: 1;
  text-align: left;
  font-size: 0.95rem;
}

.mode {
  background: #e2e8f0;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 1rem;
  flex-shrink: 0;
}

/* Technical Details */
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.detail-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.detail-card h3 {
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.detail-list {
  list-style-type: none;
  padding-left: 0;
}

.detail-list li {
  padding: 0.7rem 0;
  position: relative;
  padding-left: 1.5rem;
  color: var(--vp-c-text-2);
}

.detail-list li::before {
  content: "→";
  color: #646cff;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .controls-grid {
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 0.8rem; /* Reduce gap between items */
  }

  .control-card {
    flex-direction: column; /* Stack elements vertically */
    padding: 1rem;
    text-align: center;
  }

  .key {
    margin-right: 0;
    margin-bottom: 0.5rem;
    width: 40px; /* Smaller key */
    height: 40px;
    font-size: 1rem;
  }

  .function {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem; /* Slightly smaller text */
  }

  .mode {
    margin-left: 0;
    margin-top: 0.5rem;
    padding: 0.2rem 0.6rem;
  }

  .project-header h1 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .comparison-container {
    height: 350px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .function {
    font-size: 0.85rem; /* Even smaller on very small screens */
  }

  .mode {
    font-size: 0.8rem;
  }

  .dual-rasterizer-container {
    padding: 1.5rem;
  }

  .project-header h1 {
    font-size: 1.8rem;
  }

  .project-tagline {
    font-size: 0.9rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .comparison-container {
    height: 250px;
  }

  .controls-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">