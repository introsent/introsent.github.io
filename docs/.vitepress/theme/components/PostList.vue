<template>
  <ul class="posts">
    <li v-for="post in posts" :key="post.id" class="post" :class="{ 'post--soon': !post.link }">
      <component :is="post.link ? 'a' : 'div'" :href="post.link" class="post-inner">
        <div class="post-meta">
          <span class="pf-label" :class="{ 'pf-label--accent': !post.link }">{{ post.date }}</span>
        </div>
        <div>
          <h3 class="pf-h3 post-title">
            {{ post.title }}
            <span v-if="post.link" class="post-arrow" aria-hidden="true">→</span>
          </h3>
          <p class="pf-text post-excerpt">{{ post.excerpt }}</p>
          <ul class="pf-tags">
            <li v-for="tag in post.tags" :key="tag" class="pf-tag">{{ tag }}</li>
          </ul>
        </div>
      </component>
    </li>
  </ul>
</template>

<script setup>
import { posts as allPosts } from '../data/posts.js'

const props = defineProps({
  only: { type: Array, default: null }
})

const posts = props.only ? allPosts.filter((p) => props.only.includes(p.id)) : allPosts
</script>

<style scoped>
.posts {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--vp-c-divider);
}

.post {
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-inner {
  display: grid;
  gap: 8px 32px;
  padding: 24px 0;
  color: inherit;
  text-decoration: none;
}

@media (min-width: 768px) {
  .post-inner {
    grid-template-columns: 160px 1fr;
  }
}

.post-meta {
  padding-top: 3px;
}

.post-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.post-arrow {
  color: var(--vp-c-brand-1);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.15s, transform 0.15s;
}

a.post-inner:hover .post-arrow,
a.post-inner:focus-visible .post-arrow {
  opacity: 1;
  transform: none;
}

a.post-inner:hover .post-title {
  color: var(--vp-c-brand-1);
}

.post-excerpt {
  margin: 8px 0 12px;
  font-size: 0.95rem;
}

.post--soon .post-title,
.post--soon .post-excerpt {
  color: var(--vp-c-text-2);
}
</style>
