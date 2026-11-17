<template>
  <figure class="tm">
    <blockquote class="tm-quote">
      <p v-for="(line, i) in quote" :key="i">{{ line }}</p>
    </blockquote>
    <figcaption class="tm-by">
      <div>
        <div class="tm-name">Pieter Vantorre</div>
        <div class="tm-role">CTO, Triangle Factory</div>
      </div>
      <a v-if="showLink" class="pf-link tm-more" href="/recommendation">Read the full letter</a>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  quote: {
    type: Array,
    default: () => [
      'He did not wait to be assigned these problems: he investigated where memory and GPU time were going and carried each fix through to release.',
      'He stands out because he understands what happens underneath: he measures, finds the root cause and verifies the result.'
    ]
  },
  showLink: { type: Boolean, default: true }
})
</script>

<style scoped>
.tm {
  margin: 0;
  padding: 0 0 0 24px;
  border-left: 2px solid var(--vp-c-brand-1);
}

.tm-quote {
  margin: 0;
  padding: 0;
  border: 0;
}

.tm-quote p {
  margin: 0;
  max-width: 46ch;
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.tm-quote p + p {
  margin-top: 0.8em;
}

.tm-by {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px 32px;
  margin-top: 28px;
  max-width: 46rem;
}

.tm-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tm-role {
  font-family: var(--pf-font-meta);
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.tm-more {
  font-size: 0.95rem;
}
</style>
