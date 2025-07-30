<template>
  <div class="slider-container">
    <button class="arrow left" @click="prevSlide">←</button>
    <div class="slider">
      <div
          v-for="(project, index) in projects"
          :key="index"
          class="slide"
          :class="{ active: currentIndex === index }"
          @click="openProject(project.link)"
          @mouseover="handleHover(index)"
          @mouseleave="handleLeave(index)"
      >
        <video
            ref="videos"
            :src="project.video"
            muted
            loop
            playsinline
        />
        <div class="overlay">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
    <button class="arrow right" @click="nextSlide">→</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      projects: [
        {
          title: "Salamander",
          description: "Real-time rendering with Vulkan API",
          video: "/videos/salamander.mp4",
          link: "/projects/salamander"
        },
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
    handleHover(index) {
      if (index === this.currentIndex) {
        this.$refs.videos[index].play();
        this.$refs.videos[index].style.filter = "brightness(100%)";
      }
    },
    handleLeave(index) {
      if (index === this.currentIndex) {
        this.$refs.videos[index].pause();
        this.$refs.videos[index].currentTime = 0;
        this.$refs.videos[index].style.filter = "brightness(70%)";
      }
    },
    openProject(link) {
      window.location.href = link;
    }
  },
  mounted() {
    // Initialize first video
    this.$refs.videos[0].style.filter = "brightness(70%)";
  }
}
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 500px;
}

.slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  cursor: pointer;
}

.slide.active {
  opacity: 1;
}

.slide video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.slide.active:hover .overlay {
  opacity: 0;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 1.2rem;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.8);
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
</style>