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

      <!-- Category Rows -->
      <div class="categories-rows">
        <div
            v-for="category in categories"
            :key="category.name"
            class="category-row"
        >
          <h3 class="category-title"><i :class="category.icon"></i> {{ category.name }}</h3>

          <div class="row-scroller">
            <button
                v-if="category.projects.length > 3"
                class="row-arrow row-arrow-left"
                @click="scrollRow(category.name, -1)"
            >
              ←
            </button>

            <div class="row-track" :ref="el => setRowRef(el, category.name)">
              <div
                  v-for="project in category.projects"
                  :key="project.title"
                  class="project-card"
                  @click="goToProject(project.link)"
                  @mouseenter="(e) => openPopup(e, project, category.icon)"
                  @mouseleave="scheduleClosePopup"
              >
                <video
                    v-if="project.video"
                    class="project-thumbnail"
                    muted
                    loop
                    playsinline
                    preload="auto"
                >
                  <source :src="project.video" type="video/mp4">
                </video>
                <img
                    v-else-if="project.image"
                    class="project-thumbnail"
                    :src="project.image"
                    :alt="project.title"
                />
                <div class="project-title">{{ project.title }}</div>
              </div>
            </div>

            <button
                v-if="category.projects.length > 3"
                class="row-arrow row-arrow-right"
                @click="scrollRow(category.name, 1)"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <!-- Shared Project Popup (teleported to body so it's never clipped) -->
      <Teleport to="body">
        <div
            v-if="activePopup"
            class="project-popup"
            :class="{ visible: activePopup }"
            :style="popupStyle"
            @mouseenter="keepPopupOpen"
            @mouseleave="closePopup"
        >
          <video
              v-if="activePopup.video"
              ref="popupVideoEl"
              class="popup-video"
              muted
              loop
              playsinline
              autoplay
          >
            <source :src="activePopup.video" type="video/mp4">
          </video>
          <img
              v-else-if="activePopup.image"
              class="popup-video"
              :src="activePopup.image"
              :alt="activePopup.title"
          />
          <div class="popup-content">
            <h4><i :class="activePopup.icon"></i> {{ activePopup.title }}</h4>
            <p>{{ activePopup.description }}</p>
            <a :href="activePopup.link" class="read-more" @click.stop>
              Read more <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </Teleport>

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
    const rowRefs = {}

    const featuredProject = ref({
      title: "Salamander",
      description: "Real-time rendering engine with Vulkan API",
      video: "/videos/salamander.mp4",
      link: "/projects/salamander"
    })

    const categories = ref([
      {
        name: "Career",
        icon: "fas fa-briefcase",
        projects: [
          {
            title: "Forefront",
            description: "Optimization & graphics programming at Triangle Factory",
            video: "/videos/forefront.mp4",
            link: "/career/forefront"
          }
        ]
      },
      {
        name: "Graphics Programming",
        icon: "fas fa-paint-brush",
        projects: [
          {
            title: "Mesh Area Lights",
            description: "Research of different sampling strategies",
            image: "/images/mesh-lights/quad_ground_truth.png",
            link: "/projects/mesh-area-lights"
          },
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
        ]
      },
      {
        name: "Math & Physics Programming",
        icon: "fas fa-atom",
        projects: [
          {
            title: "Reel or nothing!",
            description: "Physics programming for group project",
            video: "/videos/reel-or-nothing.mp4",
            link: "/projects/reel-or-nothing"
          },
          {
            title: "PPGA",
            description: "Plane-based projective geometric algebra",
            video: "/videos/ppga.mp4",
            link: "/projects/ppga"
          }
        ]
      },
      {
        name: "Engines",
        icon: "fas fa-cogs",
        projects: [
          {
            title: "Nocturne Engine",
            description: "Game engine with retro game example",
            video: "/videos/qbert-video.mp4",
            link: "/projects/nocturne"
          }
        ]
      },
      {
        name: "Gameplay",
        icon: "fas fa-gamepad",
        projects: [
          {
            title: "Ninja Gaiden",
            description: "Remake of the classic Ninja Gaiden NES game",
            video: "/videos/ninja-gaiden.mp4",
            link: "/projects/ninja-gaiden"
          }
        ]
      }
    ])

    const setRowRef = (el, name) => {
      if (el) rowRefs[name] = el
    }

    const scrollRow = (name, direction) => {
      const track = rowRefs[name]
      if (!track) return
      const cardWidth = 280 + 24 // card min-width + gap
      track.scrollBy({ left: direction * cardWidth * 2, behavior: 'smooth' })
    }

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

    const playPopupVideo = (event) => {
      const card = event.currentTarget
      const popup = card.querySelector('.project-popup')
      if (popup) {
        const video = popup.querySelector('video.popup-video')
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

      popup.style.left = 'calc(100% + 20px)'
      popup.style.right = 'auto'

      if (cardRect.right + popupWidth > viewportWidth) {
        popup.style.left = 'auto'
        popup.style.right = 'calc(100% + 20px)'
      }

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

    const pausePopupVideo = (event) => {
      const card = event.currentTarget

      const thumbnailVideo = card.querySelector('video.project-thumbnail')
      if (thumbnailVideo) {
        thumbnailVideo.pause()
        thumbnailVideo.currentTime = 0
      }

      const popup = card.querySelector('.project-popup')
      if (popup) {
        const video = popup.querySelector('video.popup-video')
        if (video) {
          video.pause()
          video.currentTime = 0
        }
      }
    }

    const goToProject = (link) => {
      window.location.href = link;
    }

    return {
      featuredVideo,
      featuredProject,
      categories,
      setRowRef,
      scrollRow,
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
  line-height: 1.2;
  padding-bottom: 0.1em;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
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

/* Category Rows */
.categories-rows {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.category-row {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 1.8rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 108, 255, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.category-row:hover {
  box-shadow: 0 12px 25px rgba(100, 108, 255, 0.15);
  border-color: rgba(100, 108, 255, 0.3);
}

.category-title {
  font-size: 1.6rem;
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid rgba(100, 108, 255, 0.3);
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.row-scroller {
  position: relative;
  display: flex;
  align-items: center;
}

.row-track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 0.25rem 0.25rem 1.25rem;
  margin-bottom: -1rem;
}

.row-track::-webkit-scrollbar {
  display: none;
}

.row-arrow {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(100, 108, 255, 0.15);
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 5;
}

.row-arrow:hover {
  background: var(--vp-c-brand);
  transform: scale(1.08);
}

.row-arrow-left {
  margin-right: 0.75rem;
}

.row-arrow-right {
  margin-left: 0.75rem;
}

.project-card {
  position: relative;
  z-index: 2;
  flex: 0 0 280px;
  width: 280px;
  border-radius: 14px;
  overflow: visible;
  height: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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
  display: block;
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

/* Project Popup */
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
  position: absolute;
  top: 50%;
  left: calc(100% + 20px);
  transform: translateY(calc(-50% + 10px)) scale(0.95);
  transition: all 0.3s ease;
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
    right: auto !important;
    transform: translate(-50%, -50%) !important;
    max-width: 90vw;
  }

  .project-card:hover .project-popup {
    opacity: 1 !important;
    transform: translate(-50%, -50%) scale(1) !important;
  }
}

@media (max-width: 768px) {
  .row-arrow {
    display: none;
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

  .category-row {
    padding: 1.2rem;
  }

  .category-title {
    font-size: 1.3rem;
  }

  .project-card {
    flex: 0 0 200px;
    width: 200px;
    height: 150px;
  }

  .project-title {
    font-size: 0.95rem;
    padding: 0.7rem;
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
    font-size: 1rem;
  }

  .project-card {
    flex: 0 0 160px;
    width: 160px;
    height: 130px;
  }

  .project-title {
    font-size: 0.8rem;
  }
}
</style>