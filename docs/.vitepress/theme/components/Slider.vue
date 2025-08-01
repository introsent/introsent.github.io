<template>
  <h2 class="section-title">Projects</h2>
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
            :ref="el => setVideoRef(el, index)"
            :src="project.video"
            muted
            loop
            playsinline
            preload="auto"
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
      videos: [],
      projects: [
        {
          title: "Salamander",
          description: "Real-time rendering engine with Vulkan API",
          video: "/videos/salamander.mp4",
          link: "/projects/salamander"
        },
        {
          title: "Software Raytracer",
          description: "Software raytracer with C++",
          video: "/videos/raytracer.mp4",
          link: "/projects/raytracer"
        },
        {
          title: "Dual Rasterizer",
          description: "Software and hardware (DirectX) rasterizer",
          video: "/videos/rasterizer.mp4",
          link: "/projects/rasterizer"
        },
        {
          title: "Reel or nothing!",
          description: "Physics programming for group project",
          video: "/videos/reel-or-nothing.mp4",
          link: "/projects/reel-or-nothing"
        },
        {
          title: "Nocturne Engine and Q*bert",
          description: "Game engine with retro game example",
          video: "/videos/qbert-video.mp4",
          link: "/projects/qbert"
        }
      ]
    }
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      // Reset old slide video
      if (this.videos[oldIndex]) {
        this.videos[oldIndex].pause();
        this.videos[oldIndex].currentTime = 0;
        this.videos[oldIndex].style.filter = "brightness(20%)";
      }

      // Initialize new slide video
      if (this.videos[newIndex]) {
        this.videos[newIndex].style.filter = "brightness(0%)";
      }
    }
  },
  methods: {
    setVideoRef(el, index) {
      if (el) {
        this.videos[index] = el;
        if (index === this.currentIndex) {
          this.$nextTick(() => {
            el.style.filter = "brightness(70%)";
          });
        }
      }
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
    handleHover(index) {
      if (index === this.currentIndex && this.videos[index]) {
        this.videos[index].play();
        this.videos[index].style.filter = "brightness(100%)";
      }
    },
    handleLeave(index) {
      if (index === this.currentIndex && this.videos[index]) {
        this.videos[index].pause();
        this.videos[index].currentTime = 0;
        this.videos[index].style.filter = "brightness(70%)";
      }
    },
    openProject(link) {
      window.location.href = link;
    }
  },
  mounted() {
    // Fallback initialization
    this.$nextTick(() => {
      if (this.videos[0] && !this.videos[0].style.filter) {
        this.videos[0].style.filter = "brightness(70%)";
      }
    });
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
  border-radius: 2%;
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
  pointer-events: none;
}

.slide.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 2;
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
  background: rgba(0, 0, 0, 0.2);
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