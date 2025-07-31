<template>
  <section class="skills-section">
    <h2 class="section-title">Technical Expertise</h2>
    <div class="skills-grid">
      <div v-for="(category, index) in skillCategories" :key="index" class="skill-category">
        <h3>{{ category.name }}</h3>
        <div class="skills-container">
          <div v-for="(skill, idx) in category.skills" :key="idx" class="skill-item">
            <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
            <span class="skills-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skillCategories: [
        {
          name: "Graphics APIs",
          skills: [
            { name: "Vulkan", icon: "/icons/vulkan.svg" },
            { name: "DirectX 11", icon: "/icons/directx.svg" },
            { name: "OpenGL", icon: "/icons/opengl.svg" }
          ]
        },
        {
          name: "Languages",
          skills: [
            { name: "C++", icon: "/icons/cpp.svg" },
            { name: "HLSL/GLSL", icon: "/icons/shader.svg" },
            { name: "C#", icon: "/icons/csharp.svg" }
          ]
        },
        {
          name: "Tools & Engines",
          skills: [
            { name: "Unity", icon: "/icons/unity.svg" },
            { name: "Unreal", icon: "/icons/unreal.svg" },
            { name: "OptiX", icon: "/icons/nvidia.svg" }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
}

.skills-section {
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.skill-category {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.skill-category h3 {
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
  margin-top: 0;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--vp-c-brand);
  border-radius: 8px;
  transition: transform 0.2s;
}

.skills-name {
  color: rgba(255,255,255,0.8);
  font-size: 0.8rem;
}

.skill-item:hover {
  transform: translateY(-3px);
}

.skill-icon {
  width: 24px;
  height: 24px;
}
</style>