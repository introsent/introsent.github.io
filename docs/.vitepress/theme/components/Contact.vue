<template>
  <section class="contact-section">
    <div class="contact-container">
      <h1>Career</h1>
      <p>Interested in graphics programming positions starting June 2026</p>
      <a href="mailto:ivans.minajevs@outlook.com" class="contact-button">
        Get In Touch
      </a>
      <div class="social-links">
        <a v-for="(social, index) in socials" :key="index" :href="social.link" target="_blank">
          <img :src="social.icon" :alt="social.name" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { name: "GitHub", icon: "/icons/github.svg", link: "https://github.com/introsent" },
        { name: "LinkedIn", icon: "/icons/linkedin.svg", link: "https://linkedin.com/in/ivans-minajevs-991bbb214" },
        { name: "Discord", icon: "/icons/discord.svg", link: "https://discordapp.com/users/373133077448359957" }
      ]
    }
  }
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, #2c3e50 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.contact-button {
  display: inline-block;
  background: white;
  color: var(--vp-c-brand);
  padding: 0.3rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-links a {
  display: inline-block;
  transition: transform 0.3s;
}

.social-links a:hover {
  transform: translateY(-5px);
}

.social-links img {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
}
</style>