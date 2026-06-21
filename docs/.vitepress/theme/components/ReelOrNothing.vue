<template>
  <div class="reel-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Reel or Nothing</h1>
      <p class="project-tagline">A competitive couch PvP fishing game with physics-based mayhem</p>
      <div class="project-meta">
        <a
            href="https://jordi16m.itch.io/reelornothing"
            class="play-btn"
            target="_blank"
        >
          <i class="fas fa-fish"></i>
          Play on itch.io
        </a>
      </div>
    </div>

    <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
      <iframe
          src="https://www.youtube.com/embed/4B4SiHHXRAY?si=ZMsloBgu5hmIvb95"
          title="YouTube video player"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
      </iframe>
    </div>
    <!-- Game Overview -->
    <div class="section">
      <h2 class="section-title">Hook, Line & Sinker!</h2>
      <p class="section-description">
        Reel or Nothing is a competitive couch PvP fishing game where up to 4 players battle it out to become the top angler.
        Cast your line, win a quick minigame to catch a fish, and race it to the drop-off point to score.
      </p>
      <p class="section-description">
        But watch out! Other players are doing everything in their power to stop you, shoving you into the water and stealing your catch!
        One wrong step, and splash — there goes your fish (and your dignity).
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Physics-Based Movement</h3>
          <p>Ragdoll physics with configurable joints for dynamic collisions.</p>
        </div>
        <div class="feature-card">
          <h3>Water Mayhem</h3>
          <p>Buoyancy & splash effects synchronized with shaders.</p>
        </div>
        <div class="feature-card">
          <h3>Couch Competition</h3>
          <p>4-player local multiplayer with full controller support.</p>
        </div>
      </div>
    </div>

    <!-- Devlog Entries -->
    <div class="section">
      <h2 class="section-title">My Contributions</h2>
      <div class="devlog-container">
        <div class="devlog-entry" v-for="(entry, idx) in devlogEntries" :key="idx">
          <h3 class="devlog-title">{{ entry.title }}</h3>
          <div class="devlog-date">{{ entry.date }}</div>
          <div class="devlog-content">
            <p class="devlog-describtion" v-for="(p, i) in entry.content" :key="i">{{ p }}</p>
            <ul class="contribution-list" v-if="entry.features">
              <li v-for="(f, j) in entry.features" :key="j">{{ f }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="section">
      <h2 class="section-title">The Team</h2>
      <div class="team-grid">
        <div class="team-column">
          <h3>Programmers</h3>
          <ul class="team-list">
            <li>Samir Vertahovs</li>
            <li>Ivans Minajevs</li>
            <li>Jonas Christiaens</li>
          </ul>
        </div>
        <div class="team-column">
          <h3>Artists</h3>
          <ul class="team-list">
            <li>Kris Catteau</li>
            <li>Michelle Bogdanova</li>
            <li>Megan Veldt</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReelOrNothingProject',
  data() {
    return {
      devlogEntries: [
        {
          title: "Ragdoll System Implementation",
          content: [
            "This week, we focused on adding a ragdoll system to our player character model. The goal was to introduce realism to dynamic in-game scenarios by simulating natural physics responses when the character is hit in Unity.",
          ],
          features: [
            "Adjusted bone transforms for proper physics simulation",
            "Configured joints between bones for coherent ragdoll effects",
            "Created character controller class to handle physics and player input",
            "Added controller input using analog stick"
          ]
        },
        {
          title: "Physics-Based Movement",
          content: [
            "This week, we created a movement system based on ragdoll physics. The main goal was to create a solid and responsive movement mechanism that complements the vertical design of our map.",
            "We reconfigured bones to use configurable joints, ensuring natural and dynamic movement by applying constraints and forces."
          ],
          features: [
            "Implemented dash mechanic with adjustable speed and cooldown",
            "Created seamless stair climbing transitions",
            "Fixed collision detection and slope management",
            "Ensured character doesn't fall through ground"
          ]
        },
        {
          title: "Water Physics & Animations",
          content: [
            "This week we implemented buoyancy physics that synchronizes with the water shader created by our artist. We also completed all character animations and implemented a state machine system.",
          ],
          features: [
            "Created dynamic buoyancy system for water interactions",
            "Implemented animation state machine for smooth transitions",
            "Fixed rotation issues during movement",
            "Added fishing line visualization during fishing"
          ]
        },
        {
          title: "Effects & Polish",
          content: [
            "This week we focused on RFX implementation and movement polish. Effects like water splashing and confetti were added for better player feedback.",
            "We improved the conversion between physics mode and animation mode, creating robust systems for future changes."
          ],
          features: [
            "Implemented RFX management and spawning system",
            "Improved rotation speed and stair climbing",
            "Fixed animation transition bugs",
            "Added floaty to keep character on water surface"
          ]
        }
      ],
      testimonials: [
        { text: "It's like Animal Crossing if Tom Nook let you slap people into the water!", source: 'Playtester' },
        { text: "I caught a fish and immediately got suplexed into the water. Cinema.", source: 'Playtester' },
        { text: "I didn't know fishing could be this intense. I'm sweating. The fish are judging me...", source: 'Playtester' },
        { text: "It's like fishing, but with fewer rules and more betrayal. Just how I like it.", source: 'Playtester' }
      ]
    };
  }
};
</script>

<style scoped>
.reel-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Helvetica Neue', sans-serif;
  color: #213547;
}

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
  color: #64748b;
  margin: 0 auto 1.5rem;
}

.project-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.play-btn {
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
  box-shadow: 0 4px 6px rgba(100,108,255,0.15);
}

.play-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(100,108,255,0.25);
  color: white;
}

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
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.highlight {
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  color: #535bf2;
  margin-top: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
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
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  border-color: rgba(100,108,255,0.8);
}

.feature-card h3 {
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--vp-c-text-2);
}

.devlog-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.devlog-entry {
  border-radius: 12px;
  border: 3px solid rgba(100, 108, 255, 0.3);
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.devlog-entry:hover {
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  border-color: rgba(100,108,255,0.8);
}

.devlog-title {
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.devlog-describtion
{
  color: var(--vp-c-text-2);
}

.devlog-date {
  color: #64748b;
  font-weight: 500;
  margin-bottom: 1rem;
}

.contribution-list {
  color: var(--vp-c-text-2);
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.contribution-list li {
  color: var(--vp-c-text-2);
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.team-column {
  border: 3px solid rgba(100, 108, 255, 0.3);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.team-column:hover
{
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  border-color: rgba(100,108,255,0.8);
}

.team-column h3 {
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  text-align: center;
}

.team-list {
  list-style: none;
}

.team-list li {
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 8px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .project-header h1 { font-size: 2.2rem; }
  .section-title { font-size: 1.7rem; }
  .features-grid, .team-grid, .testimonials-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .reel-container { padding: 1.5rem; }
  .project-header h1 { font-size: 1.8rem; }
  .section-title { font-size: 1.5rem; }
}
</style>
