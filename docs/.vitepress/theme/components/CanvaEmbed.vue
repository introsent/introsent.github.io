<template>
  <div class="canva-section">
    <div class="canva-container">
      <div class="responsive-canva">
        <iframe
            loading="lazy"
            :src="canvaUrl"
            allowfullscreen="allowfullscreen"
            allow="fullscreen"
        ></iframe>
      </div>
      <div class="canva-link">
        <a :href="fullCanvaUrl" target="_blank" rel="noopener">
          Open full presentation in new tab
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvaUrl: "https://www.canva.com/design/DAGpfbYIF-0/qqEPP7YRSs_sT6wsk6hUXg/view?embed",
      fullCanvaUrl: "https://www.canva.com/design/DAGpfbYIF-0/qqEPP7YRSs_sT6wsk6hUXg/view?utm_content=DAGpfbYIF-0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
    }
  }
}
</script>

<style scoped>
.canva-section {
  margin: 0 0;
}


.canva-container {
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(100, 108, 255, 0.15);
  padding: 2rem;
  margin: 0 auto;
}

.responsive-canva {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.responsive-canva iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.canva-link {
  text-align: center;
  margin-top: 1.5rem;
}

.canva-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #535bf2;
  text-decoration: none;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.canva-link a:hover {
  background: rgba(100, 108, 255, 0.1);
  transform: translateY(-2px);
}

.canva-link svg {
  transition: transform 0.3s ease;
}

.canva-link a:hover svg {
  transform: translateX(3px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .canva-container {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.7rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }

  .section-description {
    font-size: 0.95rem;
  }

  .canva-link a {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}
</style>