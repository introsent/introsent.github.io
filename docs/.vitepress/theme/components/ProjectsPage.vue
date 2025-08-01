<template>
  <div class="portfolio-wrapper">
    <div class="projects-portfolio">
      <div class="header">
        <h1>Project Portfolio</h1>
        <p>A showcase of my work in graphics programming, physics simulation, game engines, and gameplay development</p>
      </div>

      <!-- Featured Project (Salamander) -->
      <div class="featured-project">
        <h2 class="section-title">Featured Project</h2>
        <div
            class="featured-container"
            @mouseenter="playFeaturedVideo"
            @mouseleave="pauseFeaturedVideo"
            @click="goToProject(featuredProject.link)"
        >
          <video
              ref="featuredVideo"
              class="featured-video"
              muted
              loop
              playsinline
          >
            <source src="/videos/salamander.mp4" type="video/mp4">
          </video>
          <div class="featured-overlay">
            <h3>Salamander</h3>
            <p>Real-time rendering engine with Vulkan API featuring advanced lighting, physically-based rendering, and real-time global illumination.</p>
            <button class="btn" @click.stop="goToProject(featuredProject.link)">
              <i class="fas fa-eye"></i> View Project Details
            </button>
          </div>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="categories-grid">
        <!-- Graphics Programming -->
        <div class="category">
          <h3 class="category-title"><i class="fas fa-paint-brush"></i> Graphics Programming</h3>
          <div class="projects-grid">
            <div
                v-for="project in graphicsProjects"
                :key="project.title"
                class="project-card"
                @click="goToProject(project.link)"
                @mouseenter="(e) => { playPopupVideo(e, project); positionPopup(e) }"
                @mouseleave="pausePopupVideo($event, project)"
            >
              <video
                  class="project-thumbnail"
                  muted
                  loop
                  playsinline
                  preload="auto"
              >
                <source :src="project.video" type="video/mp4">
              </video>
              <div class="project-title">{{ project.title }}</div>

              <!-- Project Popup -->
              <div class="project-popup">
                <video
                    class="popup-video"
                    muted
                    loop
                    playsinline
                >
                  <source :src="project.video" type="video/mp4">
                </video>
                <div class="popup-content">
                  <h4><i class="fas fa-paint-brush"></i> {{ project.title }}</h4>
                  <p>{{ project.description }}</p>
                  <a :href="project.link" class="read-more" @click.stop>
                    Read more <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Math & Physics Programming -->
        <div class="category">
          <h3 class="category-title"><i class="fas fa-atom"></i> Math & Physics Programming</h3>
          <div class="projects-grid">
            <div
                v-for="project in physicsProjects"
                :key="project.title"
                class="project-card"
                @click="goToProject(project.link)"
                @mouseenter="(e) => { playPopupVideo(e, project); positionPopup(e) }"
                @mouseleave="pausePopupVideo($event, project)"
            >
              <video
                  class="project-thumbnail"
                  muted
                  loop
                  playsinline
              >
                <source :src="project.video" type="video/mp4">
              </video>
              <div class="project-title">{{ project.title }}</div>

              <!-- Project Popup -->
              <div class="project-popup">
                <video
                    class="popup-video"
                    muted
                    loop
                    playsinline
                >
                  <source :src="project.video" type="video/mp4">
                </video>
                <div class="popup-content">
                  <h4><i class="fas fa-atom"></i> {{ project.title }}</h4>
                  <p>{{ project.description }}</p>
                  <a :href="project.link" class="read-more" @click.stop>
                    Read more <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Engines -->
        <div class="category">
          <h3 class="category-title"><i class="fas fa-cogs"></i> Engines</h3>
          <div class="projects-grid">
            <div
                v-for="project in engineProjects"
                :key="project.title"
                class="project-card"
                @click="goToProject(project.link)"
                @mouseenter="(e) => { playPopupVideo(e, project); positionPopup(e) }"
                @mouseleave="pausePopupVideo($event, project)"
            >
              <video
                  class="project-thumbnail"
                  muted
                  loop
                  playsinline
              >
                <source :src="project.video" type="video/mp4">
              </video>
              <div class="project-title">{{ project.title }}</div>

              <!-- Project Popup -->
              <div class="project-popup">
                <video
                    class="popup-video"
                    muted
                    loop
                    playsinline
                >
                  <source :src="project.video" type="video/mp4">
                </video>
                <div class="popup-content">
                  <h4><i class="fas fa-cogs"></i> {{ project.title }}</h4>
                  <p>{{ project.description }}</p>
                  <a :href="project.link" class="read-more" @click.stop>
                    Read more <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gameplay -->
        <div class="category">
          <h3 class="category-title"><i class="fas fa-gamepad"></i> Gameplay</h3>
          <div class="projects-grid">
            <div
                v-for="project in gameplayProjects"
                :key="project.title"
                class="project-card"
                @click="goToProject(project.link)"
                @mouseenter="(e) => { playPopupVideo(e, project); positionPopup(e) }"
                @mouseleave="pausePopupVideo($event, project)"
            >
              <video
                  class="project-thumbnail"
                  muted
                  loop
                  playsinline
              >
                <source :src="project.video" type="video/mp4">
              </video>
              <div class="project-title">{{ project.title }}</div>

              <!-- Project Popup -->
              <div class="project-popup">
                <video
                    class="popup-video"
                    muted
                    loop
                    playsinline
                >
                  <source :src="project.video" type="video/mp4">
                </video>
                <div class="popup-content">
                  <h4><i class="fas fa-gamepad"></i> {{ project.title }}</h4>
                  <p>{{ project.description }}</p>
                  <a :href="project.link" class="read-more" @click.stop>
                    Read more <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3D Models Section -->
      <div class="sketchfab-container">
        <h2 class="section-title">3D Models</h2>
        <div class="sketchfab-viewer">
          <iframe
              src="https://sketchfab.com/models/29c270eff3c44df5ab2db695dde6022f/embed"
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; fullscreen; vr"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const featuredVideo = ref(null)

    const featuredProject = ref({
      title: "Salamander",
      description: "Real-time rendering engine with Vulkan API",
      video: "/videos/salamander.mp4",
      link: "/projects/salamander"
    })

    const graphicsProjects = ref([
      {
        title: "Dual Rasterizer",
        description: "Software and hardware (DirectX) rasterizer",
        video: "/videos/rasterizer.mp4",
        link: "/projects/rasterizer"
      },
      {
        title: "Software Raytracer",
        description: "Software raytracer with C++",
        video: "/videos/raytracer.mp4",
        link: "/projects/raytracer"
      }
    ])

    const physicsProjects = ref([
      {
        title: "Reel or nothing!",
        description: "Physics programming for group project",
        video: "/videos/reel-or-nothing.mp4",
        link: "/projects/reel-or-nothing"
      },
      {
        title: "PPGA",
        description: "Plane-based projective geometric algebra",
        video: "https://assets.codepen.io/4175254/math-demo.mp4",
        link: "/projects/ppga"
      }
    ])

    const engineProjects = ref([
      {
        title: "Nocturne Engine",
        description: "Game engine with retro game example",
        video: "/videos/qbert-video.mp4",
        link: "/projects/nocturne"
      },
      {
        title: "Unity Project",
        description: "Unity-based game prototype",
        video: "https://assets.codepen.io/4175254/unity-demo.mp4",
        link: "/projects/unity"
      },
      {
        title: "Unreal Project",
        description: "Unreal Engine 5 demo",
        video: "https://assets.codepen.io/4175254/unreal-demo.mp4",
        link: "/projects/unreal"
      }
    ])

    const gameplayProjects = ref([
      {
        title: "Ninja Gaiden",
        description: "Character action game prototype",
        video: "https://assets.codepen.io/4175254/ninja-demo.mp4",
        link: "/projects/ninja-gaiden"
      },
      {
        title: "Q*Bert Remake",
        description: "Classic arcade game remake",
        video: "https://assets.codepen.io/4175254/qbert-demo.mp4",
        link: "/projects/qbert"
      }
    ])

    const playFeaturedVideo = () => {
      if (featuredVideo.value) {
        featuredVideo.value.play()
      }
    }

    const pauseFeaturedVideo = () => {
      if (featuredVideo.value) {
        featuredVideo.value.pause()
        featuredVideo.value.currentTime = 0
      }
    }

    const playPopupVideo = (event, project) => {
      const card = event.currentTarget

      // Play popup video
      const popup = card.querySelector('.project-popup')
      if (popup) {
        const video = popup.querySelector('.popup-video')
        if (video) {
          video.play().catch(e => console.log('Popup play error:', e))
        }
      }
    }

    const positionPopup = (event) => {
      const card = event.currentTarget
      const popup = card.querySelector('.project-popup')
      if (!popup) return

      const cardRect = card.getBoundingClientRect()
      const popupWidth = 340
      const viewportWidth = window.innerWidth

      // Position to right by default
      popup.style.left = 'calc(100% + 20px)'
      popup.style.right = 'auto'

      // Check if popup would go offscreen to the right
      if (cardRect.right + popupWidth > viewportWidth) {
        popup.style.left = 'auto'
        popup.style.right = 'calc(100% + 20px)'
      }

      // Adjust vertical position if needed
      const popupHeight = 350
      const viewportHeight = window.innerHeight
      const spaceBelow = viewportHeight - cardRect.bottom

      if (spaceBelow < popupHeight) {
        popup.style.top = 'auto'
        popup.style.bottom = '0'
      } else {
        popup.style.top = '50%'
        popup.style.bottom = 'auto'
        popup.style.transform = 'translateY(-50%)'
      }
    }

    const pausePopupVideo = (event, project) => {
      const card = event.currentTarget

      // Pause thumbnail video
      const thumbnailVideo = card.querySelector('.project-thumbnail')
      if (thumbnailVideo) {
        thumbnailVideo.pause()
        thumbnailVideo.currentTime = 0
      }

      // Pause popup video
      const popup = card.querySelector('.project-popup')
      if (popup) {
        const video = popup.querySelector('.popup-video')
        if (video) {
          video.pause()
          video.currentTime = 0
        }
      }
    }

    const goToProject = (link) => {
      // In a real app, this would navigate to the project page
      alert(`Navigating to: ${link}`)
    }

    return {
      featuredVideo,
      featuredProject,
      graphicsProjects,
      physicsProjects,
      engineProjects,
      gameplayProjects,
      playFeaturedVideo,
      pauseFeaturedVideo,
      playPopupVideo,
      pausePopupVideo,
      goToProject,
      positionPopup
    }
  }
}
</script>

<style scoped>
:root {
  --vp-c-bg: #1a1a2e;
  --vp-c-bg-alt: #16213e;
  --vp-c-bg-soft: rgba(30, 30, 45, 0.6);
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-text-1: #f0f0f0;
  --vp-c-text-2: #a0a0c0;
}

.portfolio-wrapper {
  color: var(--vp-c-text-1);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects-portfolio {
  max-width: 1400px;
  width: 100%;
  backdrop-filter: blur(10px);
  overflow: hidden;
  padding: 2.5rem;
}

.header {
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.header p {
  font-size: 1rem;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 1rem;
  color: var(--vp-c-text-2);
}

/* Featured Project */
.featured-project {
  margin-bottom: 4rem;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
  text-align: center;
}

.featured-container {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  height: 500px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;
}

.featured-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(100, 108, 255, 0.25);
}

.featured-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  filter: brightness(80%);
  transition: filter 0.4s ease;
}

.featured-container:hover .featured-video {
  filter: brightness(100%);
}

.featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  border-radius: 0 0 16px 16px;
}

.featured-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.featured-overlay p {
  margin-bottom: 1.5rem;
  max-width: 700px;
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.6;
}

.btn {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand));
  padding: 0.5rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 300;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  box-shadow: 0 5px 15px rgba(100, 108, 255, 0.3);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(100, 108, 255, 0.4);
}

/* Categories Grid */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
  z-index: 1;
  position: relative;
}

.category {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 1.8rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 108, 255, 0.1);
  transition: all 0.3s ease;
  position: static;
  z-index: auto;
}

.category:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(100, 108, 255, 0.15);
  border-color: rgba(100, 108, 255, 0.3);
}

.category-title {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid rgba(100, 108, 255, 0.3);
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: static;
  z-index: auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  position: static;
  z-index: auto;
}

.project-card {
  position: relative;
  z-index: 2;
  border-radius: 14px;
  overflow: visible;
  height: 200px;
  box-shadow: 0 5px
  15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.project-card:hover {
  z-index: 100;
  transform: translateY(-7px);
  box-shadow: 0 10px 25px rgba(100, 108, 255, 0.3);
}

.project-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  filter: brightness(70%);
  transition: filter 0.3s ease;
}

.project-card:hover .project-thumbnail {
  filter: brightness(90%);
}

.project-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 0 0 14px 14px;
  text-align: center;
}

/* Fixed popup styling */
.project-popup {
  width: 340px;
  background: var(--vp-c-bg-soft);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(100, 108, 255, 0.2);
  opacity: 0;
  z-index: 101;
  pointer-events: none;
  transform: translateY(calc(-50% + 10px)) scale(0.95);
  transition: all 0.3s ease;
  position: static;
}

.project-card:hover .project-popup {
  opacity: 1;
  pointer-events: all;
  transform: translateY(-50%) scale(1);
}

.popup-video {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.popup-content {
  padding: 1.6rem;
  background: var(--vp-c-bg-soft);
}

.popup-content h4 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.popup-content h4 i {
  color: var(--vp-c-brand);
}

.popup-content p {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.6;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding-bottom: 2px;
  border-bottom: 2px solid var(--vp-c-brand);
  transition: all 0.2s ease;
}

.read-more:hover {
  color: var(--vp-c-brand-light);
  border-bottom-color: var(--vp-c-brand-light);
  transform: translateX(5px);
}

/* Sketchfab Container */
.sketchfab-container {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(100, 108, 255, 0.2);
}

.sketchfab-viewer {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  height: 500px;
}

/* Responsive Design */
@media (max-width: 1100px) {
  .project-popup {
    z-index: 10000;
    position: fixed;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    max-width: 90vw;
  }

  .project-card:hover .project-popup {
    opacity: 1 !important;
    transform: translate(-50%, -50%) scale(1) !important;
  }
}

@media (max-width: 480px) {
  .projects-portfolio {
    padding: 1rem;
    margin: 0.5rem;
  }

  .header h1 {
    font-size: 1.8rem;
  }

  .featured-container {
    height: 400px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .category {
    max-width: 225px;
  }

  .category-title {
    font-size: 1.4rem;
  }

  .projects-grid {
    grid-template-columns: 1fr !important;
    gap: 1.2rem;
  }

  .project-card {
    height: 180px;
    max-width: 100%;
  }

  .project-title {
    font-size: 1rem;
  }

  .sketchfab-viewer {
    height: 300px;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .project-popup {
    display: none;
  }

  .featured-overlay h3 {
    font-size: 1rem;
  }
  .featured-overlay p {
    font-size: 0.7rem;
  }
}

/* Special adjustments for very small screens */
@media (max-width: 360px) {
  .header h1 {
    font-size: 1.6rem;
  }

  .btn {
    padding: 0.2rem 1rem;
    font-size: 0.6rem;
  }

  .featured-overlay h3 {
    font-size: 1rem;
  }
  .featured-overlay p {
    visibility: hidden;
    font-size: 0rem;
    padding: 0;
    margin: 0;
  }
  .header p {
    font-size: 0.9rem;
  }

  .category-title {
    font-size: 1.3rem;
  }

  .categories-grid {
    width: fit-content;
  }

  .category {
    width: 170px;
  }

  .category-title
  {
    font-size: 1rem;
    width: fit-content;
  }

  .project-title
  {
    font-size: 0.8rem;
  }
  .project-card {
    width: 130px;
  }
}
</style>