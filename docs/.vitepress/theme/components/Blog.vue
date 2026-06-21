<template>
  <div class="blog-container">
    <!-- Header -->
    <div class="project-header">
      <h1>Blog</h1>
      <p class="project-tagline">Notes on graphics, engines, and the bugs that taught me the most</p>
    </div>

    <!-- Post List -->
    <div class="section">
      <div class="post-list">
        <div
            v-for="post in posts"
            :key="post.slug"
            class="post-card"
            @click="goToPost(post.path)"
        >
          <div class="post-card-meta">
            <span class="post-date">{{ post.date }}</span>
            <span v-if="post.tags && post.tags.length" class="post-tags">
              <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
            </span>
          </div>
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <span class="post-read-more">
            Read post
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogIndex',
  data() {
    return {
      posts: [
        {
          slug: 'font-ram-optimization',
          path: '/projects/blog-font-deduplication',
          date: '21/06/2026',
          title: 'Font RAM Optimization in Unity',
          excerpt: 'TextMesh Pro requires fonts referenced via rich-text tags or settings defaults to live in a Resources folder, while Addressables pulls the same fonts into its own bundles. Here is how I tracked down every place that duplication hides, and stripped it out before each build.',
          tags: ['Unity', 'VR', 'Optimization']
        }
      ]
    };
  },
  methods: {
    goToPost(link) {
      window.location.href = link;
    }
  }
};
</script>

<style scoped>

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  color: #213547;
}

/* Header Styles */
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
  color: var(--vp-c-text-2);
  margin: 0 auto 1.5rem;
}

/* Section Styles */
.section {
  margin-bottom: 4rem;
}

/* Post List */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.8rem 2rem;
  border: 3px solid rgba(100, 108, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-color: rgba(100, 108, 255, 0.8);
}

.post-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.post-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: rgba(100, 108, 255, 0.12);
  color: var(--vp-c-brand);
}

.post-title {
  font-size: 1.5rem;
  margin: 0 0 0.7rem 0;
  color: var(--vp-c-text-1);
}

.post-excerpt {
  color: var(--vp-c-text-2);
  margin: 0 0 1.2rem 0;
  line-height: 1.7;
}

.post-read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  color: var(--vp-c-brand);
  font-size: 0.95rem;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.post-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.2rem;
  }

  .post-card {
    padding: 1.4rem 1.5rem;
  }

  .post-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .blog-container {
    padding: 1.5rem;
  }

  .project-header h1 {
    font-size: 1.8rem;
  }

  .post-card-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>