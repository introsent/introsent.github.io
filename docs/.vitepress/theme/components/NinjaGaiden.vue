<template>
  <div class="ninja-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Ninja Gaiden Remake</h1>
      <p class="project-tagline">A faithful recreation of the classic NES game with modern C++ programming</p>
      <div class="project-meta">
        <a
            href="https://github.com/introsent/Ninja-Gaiden-Remake"
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
        This faithful recreation of the classic Ninja Gaiden game was developed for the Programming 2 course at Howest University.
        It features authentic gameplay mechanics combined with modern programming techniques in C++.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Authentic Gameplay</h3>
          <p>Faithful recreation of the original NES gameplay with precise controls and mechanics</p>
        </div>
        <div class="feature-card">
          <h3>Modern Architecture</h3>
          <p>Clean C++ implementation with proper OOP principles and design patterns</p>
        </div>
        <div class="feature-card">
          <h3>Complete Stage 1</h3>
          <p>Full recreation of Stage 1 including enemies, platforming challenges, and the boss fight</p>
        </div>
      </div>
    </div>

    <!-- Game Showcase -->
    <div class="section">
      <h2 class="section-title">Game Showcase</h2>
      <div class="video-container">
        <div style="padding:76.47% 0 0 0;position:relative;">
          <iframe
              src="https://player.vimeo.com/video/1069498847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              title="2324_PROG2_Ivans_Minajevs_NinjaGaiden">
          </iframe>
        </div>
      </div>
    </div>

    <!-- Project Story -->
    <div class="section">
      <div class="project-story">
        <h3>The Ninja Gaiden Journey</h3>
        <p>
          As a huge fan of the NES console and Japanese game design, recreating Ninja Gaiden was both a challenge and a passion project.
          Developing this game helped me deepen my understanding of game architecture and C++ programming.
        </p>

        <div class="achievement">
          <h4>University Recognition</h4>
          <p>
            I'm proud to share that my project was chosen by Howest University to be shown as an example to students!
            This recognition means a lot to me, and I'm grateful for the opportunity to showcase my work.
            You can learn more about the course at:
            <a href="https://www.digitalartsandentertainment.be/page/27/Programming+2" target="_blank" class="course-link">
              Howest Programming 2 Course
            </a>
          </p>
        </div>

        <div class="challenges">
          <h4>Technical Challenges Overcome</h4>
          <ul class="challenge-list">
            <li>Implementing precise platforming physics</li>
            <li>Creating responsive combat mechanics</li>
            <li>Designing enemy AI behaviors</li>
            <li>Optimizing game performance</li>
            <li>Ensuring authentic recreation of the original feel</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Game Features -->
    <div class="section">
      <h2 class="section-title">Game Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Combat System</h3>
          <p>Katana-based combat with fluid animations and hit detection</p>
        </div>
        <div class="feature-card">
          <h3>Platforming</h3>
          <p>Precise jumping mechanics with wall climbing and ledge grabbing</p>
        </div>
        <div class="feature-card">
          <h3>Enemy Variety</h3>
          <p>Multiple enemy types with distinct behaviors and attack patterns</p>
        </div>
        <div class="feature-card">
          <h3>Boss Battle</h3>
          <p>Challenging end-of-stage boss fight with unique mechanics</p>
        </div>
      </div>
    </div>

    <!-- Technical Highlights -->
    <div class="section">
      <h2 class="section-title">Technical Highlights</h2>

      <div class="checklist">
        <h3>Programming Topics Applied</h3>
        <div class="checklist-grid">
          <div class="checklist-item" v-for="(topic, index) in topics" :key="index">
            <div class="topic-status">✓</div>
            <div class="topic-name">{{ topic.name }}</div>
            <div class="topic-week">{{ topic.week }}</div>
          </div>
        </div>
      </div>

      <div class="references-grid">
        <div class="reference-card">
          <h3>Controls</h3>
          <ul class="reference-links">
            <li>← → : Move left/right</li>
            <li>↓ : Move down</li>
            <li>↑ : Throw shuriken</li>
            <li>Z : Attack</li>
            <li>X : Jump</li>
          </ul>
        </div>

        <div class="reference-card">
          <h3>Acknowledgments</h3>
          <ul class="reference-links">
            <li>C++ guidelines on rule of five</li>
            <li>Cpp reference on std::unordered_map</li>
            <li>Howest University Programming 2 course</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NinjaGaidenProject',
  data() {
    return {
      topics: [
        { name: "const keyword", week: "Week 01" },
        { name: "static keyword", week: "Week 01" },
        { name: "Object composition", week: "Week 01" },
        { name: "Inheritance", week: "Week 02" },
        { name: "Polymorphism", week: "Week 03" },
        { name: "Templates", week: "Week 04" },
        { name: "STL Containers", week: "Week 05" },
        { name: "Memory Management", week: "Week 06" },
        { name: "Design Patterns", week: "Week 07" },
        { name: "Advanced OOP", week: "Week 08" }
      ]
    };
  }
};
</script>

<style scoped>
.ninja-container {
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


/* Video Container */
.video-container {
  border-radius: 12px;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
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

.achievement {
  background: rgba(100, 108, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid var(--vp-c-brand);
}

.achievement h4 {
  color:  var(--vp-c-brand);
  margin-bottom: 1rem;
}

.course-link {
  color:  var(--vp-c-brand);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.course-link:hover {
  text-decoration: underline;
}

.challenges {
  margin-top: 1rem;
  padding-top: 0.5rem;
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

/* Class Structure */
.class-structure {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.class-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.class-relationship {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: #fff3f3;
  border-radius: 8px;
}


/* Checklist */
.checklist {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 2rem;
  border: 3px solid rgba(100, 108, 255, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.checklist:hover
{
  border: 3px solid rgba(100, 108, 255, 0.3);
}

.checklist h3 {
  text-align: center;
  color: var(--vp-c-brand);
  margin-bottom: 1.5rem;
}

.checklist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  background: white;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.checklist-item:hover
{
  transform: translateY(-5px);
}

.topic-status {
  background: var(--vp-c-brand);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.topic-name {
  flex-grow: 1;
  font-weight: 500;
}

.topic-week {
  background: var(--vp-c-brand);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: white;
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
  margin-bottom: 2rem;
}

.reference-card:hover
{
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

  .checklist-grid {
    grid-template-columns: 1fr; /* Single column layout */
    gap: 0.8rem; /* Reduce gap between items */
  }

  .checklist-item {
    padding: 0.7rem; /* Slightly reduce padding */
  }

  .topic-name {
    font-size: 0.9rem; /* Slightly smaller text */
  }

  .topic-week {
    font-size: 0.8rem; /* Smaller week indicator */
    padding: 0.15rem 0.4rem; /* Tighter padding */
  }
}

@media (max-width: 480px) {
  .ninja-container {
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

  .checklist {
    padding: 1.5rem 1rem; /* Reduce padding on small screens */
  }

  .checklist-item {
    flex-wrap: wrap; /* Allow content to wrap */
    gap: 0.5rem; /* Reduce gap between elements */
  }

  .topic-status {
    width: 20px; /* Smaller status indicator */
    height: 20px;
    font-size: 0.9rem;
  }

  .topic-name {
    flex: 0 0 100%; /* Full width for topic name */
    order: 2; /* Move below status and week */
    margin-top: 0.3rem;
    padding-left: 1.8rem; /* Align with status */
  }

  .topic-week {
    margin-left: auto; /* Push to the right */
  }
}
</style>