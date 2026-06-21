<template>
  <div class="salamander-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Resume</h1>
      <p class="project-tagline">Information about my education, experience, skills and achievements</p>
      <div class="project-meta">
        <a
            href="/pdf/resume.pdf"
            class="github-btn"
            target="_blank"
        >
          Download Resume
        </a>
      </div>
    </div>
    <div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
      <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
              src="https://www.canva.com/design/DAGvGQ1rBsI/stO17sU_ejJ8f24XzmPxSA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
      </iframe>
    </div>
    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGvGQ1rBsI&#x2F;stO17sU_ejJ8f24XzmPxSA&#x2F;view?utm_content=DAGvGQ1rBsI&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Ivans Minajevs Resume</a>
  </div>

</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {};
  }
};
</script>

<style scoped>
.salamander-container {
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


.project-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.github-btn {
  background: linear-gradient(135deg, #646cff, #535bf2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(100, 108, 255, 0.15);
}

.github-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(100, 108, 255, 0.25);
  color: white;
}

.github-icon {
  width: 20px;
  height: 20px;
  fill: white;
}

/* Section Styles */
.section {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
}

.section-description {
  margin-bottom: 2rem;
  color: var(--vp-c-text-2);
}

/* Overview Cards */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  border-radius: 10px;
  padding: 0.4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 3px solid rgba(100, 108, 255, 0.3);
  background: var(--vp-c-bg-soft);
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-color: rgba(100, 108, 255, 0.8);
}


.feature-card h3 {
  color: var(--vp-c-brand);
}
.feature-card p
{
  color: var(--vp-c-text-2);
}
/* Rendering Stages */
.rendering-stages {
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.stage-navigator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.stage-names {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
}

.stage-name {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  background: #e2e8f0;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  font-size: 0.9rem;
  font-weight: 500;
}

.stage-name.active, .stage-name:hover {
  background: #646cff;
  color: white;
  border-color: #646cff;
}

.stage-viewer {
  position: relative;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  background: #0f172a;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.stage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Project Story */

.project-story h3 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
}

.project-story p {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
}

.challenges {
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(100, 108, 255, 0.1);
}

.challenges h4 {
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
  font-size: 1.3rem;
}

.challenge-list {
  list-style-type: none;
  margin-left: 1.5rem;
}

.challenge-list li {
  padding: 0.6rem 0;
  position: relative;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.challenge-list li::before {
  content: "•";
  color: var(--vp-c-brand);
  position: absolute;
  left: -1.5rem;
  top: 0.2rem;
  font-size: 1.5rem;
}

/* Libraries & References */
.references-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.reference-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.reference-card h3 {
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
  margin-top: 0;
}

.reference-links {
  list-style-type: none;
}

.reference-links li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--vp-c-brand);
}

.reference-links li::before {
  content: "→";
  position: absolute;
  left: 0;
  color:  var(--vp-c-brand);
}

.reference-links a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
}

.reference-links a:hover {
  color: #646cff;
  text-decoration: underline;
}

/* Future Plans */
.future-plans {
  background: linear-gradient(to right, #f1f5f9, #ffffff);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.future-plans h2 {
  text-align: center;
  color: var(--vp-c-brand-2);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.future-plans ul {
  list-style-type: none;
  padding-left: 1.5rem;
}

.future-plans li {
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.6;
}

.future-plans li::before {
  content: "▹";
  color: #646cff;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .stage-viewer {
    height: 350px;
  }

  .stage-names {
    gap: 0.3rem;
  }

  .stage-name {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .salamander-container {
    padding: 1.5rem;
  }

  .project-header h1 {
    font-size: 1.8rem;
  }

  .project-tagline {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .stage-viewer {
    height: 250px;
  }


  .references-grid {
    grid-template-columns: 1fr;
  }
}
</style>