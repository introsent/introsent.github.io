<template>
  <div class="nocturne-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Nocturne Engine</h1>
      <p class="project-tagline">A modern C++20 game engine implementing QBert with advanced architecture</p>
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
        Nocturne is a modern C++20 game engine that recreates the classic QBert gameplay with contemporary architecture.
        It features a component-based design, sophisticated AI, and advanced game programming patterns.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Component Architecture</h3>
          <p>GameObjects with modular components for rendering, physics, and gameplay logic</p>
        </div>
        <div class="feature-card">
          <h3>State Machines</h3>
          <p>Advanced enemy AI with state transitions for Coily (Spawning, Egg, Snake states)</p>
        </div>
        <div class="feature-card">
          <h3>Modern C++20</h3>
          <p>Utilizes ranges, concepts, lambdas, and other modern C++ features</p>
        </div>
      </div>
    </div>

    <!-- Game Features -->
    <div class="section">
      <h2 class="section-title">Game Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎮</div>
          <h3>QBert Mechanics</h3>
          <p>Classic pyramid tile navigation with color-changing mechanics</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👾</div>
          <h3>Enemy AI System</h3>
          <p>Coily, Slick, Sam, Ugg, and Wrongway with distinct behaviors</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏆</div>
          <h3>High Score System</h3>
          <p>Persistent storage of top 10 scores with player name entry</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎵</div>
          <h3>Audio Integration</h3>
          <p>Sound effects for jumps, hits, and level completion</p>
        </div>
      </div>
    </div>

    <!-- Engine Architecture -->
    <div class="section">
      <h2 class="section-title">Engine Architecture</h2>
      <div class="architecture">
        <div class="architecture-diagram">
          <div class="engine-layer">
            <div class="layer-title">Core Systems</div>
            <div class="layer-components">
              <div class="component">Scene Manager</div>
              <div class="component">Input Manager</div>
              <div class="component">Resource Manager</div>
              <div class="component">Sound Service</div>
            </div>
          </div>
          <div class="engine-layer">
            <div class="layer-title">Game Objects</div>
            <div class="layer-components">
              <div class="component">GameObject</div>
              <div class="component">Component System</div>
              <div class="component">Transform</div>
              <div class="component">Renderer</div>
            </div>
          </div>
          <div class="engine-layer">
            <div class="layer-title">Game Logic</div>
            <div class="layer-components">
              <div class="component">QBert Player</div>
              <div class="component">Enemy AI</div>
              <div class="component">Level System</div>
              <div class="component">Score System</div>
            </div>
          </div>
        </div>

        <div class="architecture-description">
          <h3 class="layer-title">Design Philosophy</h3>
          <p>
            Nocturne Engine follows a strict component-based architecture with minimal coupling between systems.
            The design prioritizes extensibility, allowing new features to be added with minimal impact on existing code.
          </p>

          <div class="design-highlights">
            <div class="highlight">
              <h4>Event-Driven Programming</h4>
              <p>Components communicate through events (OnTileColored, OnHealthChanged) to reduce dependencies</p>
            </div>
            <div class="highlight">
              <h4>Data-Driven Design</h4>
              <p>Level configurations loaded from external files for easy modification</p>
            </div>
            <div class="highlight">
              <h4>Minimal Getters/Setters</h4>
              <p>Code designed to avoid trivial accessors, focusing on behavior instead</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Programming Patterns -->
    <div class="section">
      <h2 class="section-title">Programming Patterns</h2>
      <div class="patterns-grid">
        <div class="pattern-card">
          <h3>Component Pattern</h3>
          <p>GameObjects composed of reusable components (LevelComponent, PlayerDataComponent)</p>
        </div>
        <div class="pattern-card">
          <h3>Command Pattern</h3>
          <p>Input handling via Command classes (MoveCommand, NameEntryUpCommand)</p>
        </div>
        <div class="pattern-card">
          <h3>State Pattern</h3>
          <p>QBert states (Idle, Dead) and Coily states (Egg, Snake, Dying)</p>
        </div>
        <div class="pattern-card">
          <h3>Observer Pattern</h3>
          <p>Event subscriptions for UI updates (ScoreDisplayObserver)</p>
        </div>
        <div class="pattern-card">
          <h3>Factory Pattern</h3>
          <p>Enemy creation via factory methods (CreateCoily, CreateSlick)</p>
        </div>
        <div class="pattern-card">
          <h3>Service Locator</h3>
          <p>SoundServiceLocator for decoupled audio access</p>
        </div>
      </div>
    </div>

    <!-- C++20 Features -->
    <div class="section">
      <h2 class="section-title">C++20 Features</h2>
      <div class="cpp-features">
        <div class="feature">
          <h3>Ranges Library</h3>
          <p>Clean data processing with std::ranges::filter in Level::CheckForCompletion</p>
        </div>
        <div class="feature">
          <h3>Concepts</h3>
          <p>Implicit template constraints for type safety in generic code</p>
        </div>
        <div class="feature">
          <h3>Lambda Expressions</h3>
          <p>Concise event subscriptions and menu callbacks</p>
        </div>
        <div class="feature">
          <h3>Structured Bindings</h3>
          <p>Clean tuple unpacking in range-based loops</p>
        </div>
        <div class="feature">
          <h3>constexpr</h3>
          <p>Compile-time evaluation for constants and arrays</p>
        </div>
        <div class="feature">
          <h3>std::unique_ptr</h3>
          <p>Automatic memory management for game objects</p>
        </div>
      </div>
    </div>

    <!-- Technical Highlights -->
    <div class="section">
      <h2 class="section-title">Technical Highlights</h2>
      <div class="references-grid">
        <div class="reference-card">
          <h3>Key Systems</h3>
          <ul class="reference-links">
            <li>Dynamic Level Management</li>
            <li>Scene Management (Menu, Gameplay, Scores)</li>
            <li>Input System (Keyboard/Controller)</li>
            <li>Resource Management (Textures, Fonts)</li>
            <li>Sound Service Locator</li>
          </ul>
        </div>

        <div class="reference-card">
          <h3>Design Choices</h3>
          <ul class="reference-links">
            <li>Event-Driven Architecture</li>
            <li>Finite State Machines</li>
            <li>Data-Driven Configuration</li>
            <li>Extensible Component System</li>
            <li>Minimal Trivial Accessors</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NocturneProject',
  data() {
    return {};
  }
};
</script>

<style>
.nocturne-container {
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

.project-header .project-meta .github-btn {
  background: linear-gradient(135deg, #646cff, #535bf2);
  color: white !important; /* Force white text */
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none !important; /* Remove underline */
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(100, 108, 255, 0.15);
}

.project-header .project-meta .github-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(100, 108, 255, 0.25);
  color: white !important; /* Maintain white text on hover */
  text-decoration: none !important; /* Remove underline on hover */
}

.project-header .project-meta .github-icon {
  width: 20px;
  height: 20px;
  fill: white;
  margin-right: 10px; /* Added spacing */
}

.project-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));;
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

.section .section-title {
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

.section-description {
  margin-bottom: 2rem;
  color: var(--vp-c-text-2);
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1rem;
  line-height: 1.7;
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

.feature-icon {
  padding-top: 1rem;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}



/* Architecture Section */
.architecture {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .architecture {
    grid-template-columns: 1fr;
  }
}

.architecture-diagram {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.engine-layer {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(100, 108, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.layer-title {
  font-weight: bold;
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
}

.layer-components {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
}

.component {
  border: 1px solid rgba(100, 108, 255, 0.5);
  color: var(--vp-c-text-2);
  border-radius: 6px;
  padding: 0.7rem;
  text-align: center;
  font-size: 0.9rem;
}

.architecture-description {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(100, 108, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.design-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.highlight {
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid var(--vp-c-brand);
}

.highlight h4 {
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

/* Patterns Grid */
.patterns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.pattern-card {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.5rem;
  padding-top: 0;
  border: 1px solid rgba(100, 108, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  color: var(--vp-c-text-2);
}

.pattern-card:hover {
  transform: translateY(-3px);
  border-color: rgba(100, 108, 255, 0.6);
}

.pattern-card h3 {
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* C++ Features */
.cpp-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.5rem;
  padding-top: 0;
  border: 1px solid rgba(100, 108, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  color: var(--vp-c-text-2);
}

.feature h3 {
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
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
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(100, 108, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.reference-card h3 {
  color: var(--vp-c-brand);
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.reference-card .reference-links {
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
  .nocturne-container {
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