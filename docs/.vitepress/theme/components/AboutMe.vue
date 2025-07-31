<template>
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
        <h3> Ivans Minajevs </h3>
        <p class="bio-text">
          As a C++ programmer with a specialism in graphics and physics programming, I am currently studying game development at the Howest University of Applied Sciences in Belgium. My professional interests lie in the fields of mathematics and physics.
        </p>
        <p class="bio-text"> Mainly, I am interested in the integration of my expertise in graphics programming, including lighting physics, volumetric effects, thermal and fluid visuals.
          Additionally, I  am keen to explore opportunities in game / engine programming, particularly in designing and implementing rigid body dynamics, character physics, collisions, vehicle and object simulation.</p>
        <p class="bio-text">In addition to my full-time role, I am a part-time private tutor in mathematics. I work with students from my home country, preparing them for national examinations and assisting them with scientific projects.</p>
        <p class="bio-text">I am eager to work in team and always learn and discover something new from experienced people in the industry.</p>
      </div>
      <div class="avatar-container">
        <img
            src="/images/avatar.png"
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
        "Physics Programming",
        "Mathematics Tutoring",
        "Game Development"
      ]
    }
  }
}
</script>

<style scoped>
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
  background:  linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
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

/* Responsive styles */
@media (max-width: 768px) {
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