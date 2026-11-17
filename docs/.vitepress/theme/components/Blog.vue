<template>
  <div class="pf blog">
    <header class="blog-header">
      <p class="pf-label"><a class="crumb" href="/">Home</a> / Blog</p>
      <h1 class="pf-h1 blog-title">Blog</h1>
      <p class="pf-lead blog-lead">Notes on graphics, engines, and the bugs that taught me the most.</p>
    </header>

    <post-list />
  </div>
</template>

<script setup>
import PostList from './PostList.vue'
</script>

<style scoped>
.blog {
  padding-top: 56px;
}

@media (min-width: 960px) {
  .blog {
    padding-top: 80px;
  }
}

.crumb {
  color: inherit;
  text-decoration: none;
}

.crumb:hover {
  color: var(--vp-c-brand-1);
}

.blog-title {
  margin-top: 16px;
}

.blog-lead {
  margin: 20px 0 48px;
}
</style>
