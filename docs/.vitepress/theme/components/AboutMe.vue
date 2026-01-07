<template>
  <div class="hero-banner" @click="goToProject">
    <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
    >
      <source src="/videos/salamander.mp4" type="video/mp4" />
    </video>
    <div class="hero-overlay">
      <h1 class="hero-title">Salamander</h1>
      <p class="hero-subtitle">A custom rendering engine built from scratch</p>
      <button class="hero-button" @click.stop="goToProject">View Project</button>
    </div>
  </div>

  <div class="header">
    <h1>Hello, I'm Ivans Minajevs!</h1>
  </div>

  <section class="about-section">
    <h2 class="section-title">About Me</h2>
    <div class="about-container">
      <div class="about-content">
        <div class="tags-container">
          <span v-for="(tag, index) in tags" :key="index" class="pill-tag">
            {{ tag }}
          </span>
        </div>
        <h3>Ivans Minajevs</h3>
        <p class="bio-text">
          I am a C++ programmer specializing in Graphics programming and Render engineering. I am currently finishing my bachelor's degree at Howest University of Applied Sciences.
        </p>
        <p class="bio-text">
          I like designing complex systems, solving physical & mathematical problems, as well as making something visually creative and appealing, yet optimized.
        </p>
        <p class="bio-text">
          I tutor math on the side - it's something I genuinely enjoy, and it taught me that explaining ideas is one of the best ways to clarify your own understanding.
        </p>
        <p class="bio-text">
          I am eager to work in team and always learn and discover something new from experienced people in the industry.
        </p>
      </div>
      <div class="avatar-container">
        <img
            src="/images/avatar_cut.png"
            alt="Ivans Minajevs"
            class="profile-avatar"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        "Graphics Programming",
        "Render Engineering",
        "Mathematics Tutoring",
        "Game Development"
      ]
    }
  },
  methods: {
    goToProject() {
      window.location.href = '/projects/salamander'
    }
  }
}
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 400px;
  cursor: pointer;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-button {
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

/* rest of your existing styles below */
.about-section {
  max-width: var(--vp-layout-max-width);
  margin: 4rem auto;
  padding: 0 2rem;
  width: 100%;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-top: 4rem;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
}

.about-container {
  max-width: var(--vp-content-width);
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  align-items: center;
}

.about-content {
  flex: 1;
}

.avatar-container {
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
}

.profile-avatar {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 70%;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.pill-tag {
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.bio-text {
  line-height: 1.7;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-banner {
    height: 50vh;
  }

  .about-container {
    flex-direction: column-reverse;
  }

  .avatar-container {
    flex: 0 0 auto;
    margin-bottom: 2rem;
  }

  .profile-avatar {
    max-width: 300px;
  }

  .tags-container {
    justify-content: center;
  }
}
</style>