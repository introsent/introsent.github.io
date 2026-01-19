<template>
  <div class="mesh-lights-container">
    <!-- Project Header -->
    <div class="project-header">
      <h1>Mesh Area Lights</h1>
      <p class="project-tagline">Sampling Strategies for Monte Carlo Path Tracing</p>
      <div class="project-meta">
        <span class="meta-badge">Graduation Work 2025-2026</span>
        <span class="meta-badge">Howest University</span>
      </div>
      <div class="project-meta">
        <a
            href="https://github.com/introsent/Prometheus.git"
            class="github-btn"
            target="_blank"
        >
          <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>

    <!-- Project Overview -->
    <div class="section">
      <h2 class="section-title">Project Overview</h2>
      <p class="section-description">
        This research investigates the efficiency of different sampling strategies for mesh area lights in
        Monte Carlo path tracing, with a focus on hierarchical and visibility-aware techniques. The study
        employs a custom CPU ray tracer (<strong>Prometheus</strong>) built with Intel Embree, comparing
        four sampling approaches across scenes of varying complexity.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Monte Carlo Integration</h3>
          <p>Physically-based rendering using stochastic sampling to approximate the rendering equation.</p>
        </div>
        <div class="feature-card">
          <h3>Hierarchical Sampling</h3>
          <p>Light BVH with flux-based importance for efficient sample distribution across mesh lights.</p>
        </div>
        <div class="feature-card">
          <h3>Visibility-Aware MIS</h3>
          <p>Learned visibility probabilities combined with Multiple Importance Sampling for optimal results.</p>
        </div>
      </div>
    </div>

    <!-- Sampling Strategies -->
    <div class="section">
      <h2 class="section-title">Sampling Strategies</h2>
      <p class="section-description">
        Four distinct sampling strategies were implemented, each representing a different point on the
        complexity-efficiency spectrum.
      </p>

      <div class="strategies-grid">
        <div
            v-for="(strategy, index) in strategies"
            :key="strategy.id"
            class="strategy-card"
            :class="{ active: activeStrategy === index }"
            @click="activeStrategy = index"
        >
          <div class="strategy-icon">{{ strategy.icon }}</div>
          <h4>{{ strategy.title }}</h4>
          <p>{{ strategy.description }}</p>
        </div>
      </div>

      <div class="strategy-details" v-if="strategies[activeStrategy]">
        <h3>{{ strategies[activeStrategy].title }}</h3>
        <p>{{ strategies[activeStrategy].details }}</p>
        <div class="formula-box" v-if="strategies[activeStrategy].formula">
          <code>{{ strategies[activeStrategy].formula }}</code>
        </div>
      </div>
    </div>

    <!-- Results Section -->
    <div class="section">
      <h2 class="section-title">Experimental Results</h2>
      <p class="section-description">
        Visual quality measured using Mean Squared Error (MSE) against ground truth images at 20,000 SPP.
        Performance measured as render time in seconds.
      </p>

      <!-- Scene Selector -->
      <div class="scene-selector">
        <div
            v-for="(scene, index) in scenes"
            :key="scene.id"
            class="scene-tab"
            :class="{ active: activeScene === index }"
            @click="activeScene = index"
        >
          {{ scene.name }}
        </div>
      </div>

      <!-- Scene Results -->
      <div class="scene-results">
        <div class="ground-truth-section">
          <h3>Ground Truth (20,000 SPP)</h3>
          <div class="ground-truth-image">
            <img :src="scenes[activeScene].groundTruth" :alt="scenes[activeScene].name + ' ground truth'" />
          </div>
          <p class="scene-description">{{ scenes[activeScene].description }}</p>
        </div>

        <!-- Comparison Grid -->
        <div class="comparison-section">
          <h3>Strategy Comparison at {{ comparisonSPP }} SPP</h3>

          <div class="spp-selector">
            <label>Samples per Pixel:</label>
            <div class="spp-buttons">
              <button
                  v-for="spp in sppOptions"
                  :key="spp"
                  :class="{ active: comparisonSPP === spp }"
                  @click="comparisonSPP = spp"
              >
                {{ spp }}
              </button>
            </div>
          </div>

          <div class="comparison-grid">
            <div
                v-for="strategy in comparisonStrategies"
                :key="strategy.id"
                class="comparison-card"
            >
              <div class="comparison-image">
                <img :src="getComparisonImage(strategy.id)" :alt="strategy.name" />
              </div>
              <div class="comparison-info">
                <h4>{{ strategy.name }}</h4>
                <div class="metrics">
                  <div class="metric">
                    <span class="metric-label">MSE</span>
                    <span class="metric-value">{{ getMetric(strategy.id, 'mse') }}</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">Time</span>
                    <span class="metric-value">{{ getMetric(strategy.id, 'time') }}s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Results Table -->
        <div class="results-table-section">
          <h3>Detailed Results</h3>
          <div class="table-wrapper">
            <table class="results-table">
              <thead>
              <tr>
                <th>Strategy</th>
                <th>1 SPP MSE</th>
                <th>16 SPP MSE</th>
                <th>256 SPP MSE</th>
                <th>256 SPP Time</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="row in scenes[activeScene].results" :key="row.strategy">
                <td>{{ row.strategy }}</td>
                <td>{{ row.mse1 }}</td>
                <td>{{ row.mse16 }}</td>
                <td>{{ row.mse256 }}</td>
                <td>{{ row.time256 }}s</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="section">
      <h2 class="section-title">Convergence Analysis</h2>

      <div class="charts-grid">
        <div class="chart-card">
          <h3>MSE vs. Samples per Pixel</h3>
          <div class="chart-placeholder">
            <img :src="scenes[activeScene].mseChart" alt="MSE vs SPP chart" />
          </div>
          <p class="chart-caption">Lower MSE indicates better convergence to ground truth.</p>
        </div>
        <div class="chart-card">
          <h3>Render Time vs. Samples per Pixel</h3>
          <div class="chart-placeholder">
            <img :src="scenes[activeScene].timeChart" alt="Render time vs SPP chart" />
          </div>
          <p class="chart-caption">Hierarchical methods show overhead in simple scenes but scale better with complexity.</p>
        </div>
      </div>
    </div>

    <!-- Key Findings -->
    <div class="section">
      <h2 class="section-title">Key Findings</h2>

      <div class="findings-grid">
        <div class="finding-card highlight">
          <div class="finding-number">01</div>
          <h4>Hierarchical Flux Sampling</h4>
          <p>Provides the best overall trade-off between variance reduction and computational efficiency for mesh area lights.</p>
        </div>
        <div class="finding-card">
          <div class="finding-number">02</div>
          <h4>Area-Importance Limitation</h4>
          <p>Despite theoretical advantages, O(n) solid angle computation makes it impractical for production use.</p>
        </div>
        <div class="finding-card">
          <div class="finding-number">03</div>
          <h4>Visibility-Aware Benefits</h4>
          <p>Significant improvements in high-occlusion scenarios where geometric blocking wastes samples.</p>
        </div>
        <div class="finding-card">
          <div class="finding-number">04</div>
          <h4>Scene Complexity Matters</h4>
          <p>Optimal strategy selection depends on scene characteristics—simple scenes favor low-overhead methods.</p>
        </div>
      </div>
    </div>

    <!-- Technical Highlights -->
    <div class="section">
      <h2 class="section-title">Technical Implementation</h2>

      <div class="tech-grid">
        <div class="tech-card">
          <div class="tech-icon">⚡</div>
          <h4>Intel Embree 4</h4>
          <p>High-performance ray tracing</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🌳</div>
          <h4>Light BVH</h4>
          <p>SAOH-based tree construction</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🎯</div>
          <h4>Importance Sampling</h4>
          <p>Flux-weighted traversal</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">👁️</div>
          <h4>Visibility Cache</h4>
          <p>Spatial hash grid learning</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">⚖️</div>
          <h4>MIS Framework</h4>
          <p>Balance heuristic weighting</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">📊</div>
          <h4>Statistical Validation</h4>
          <p>Mann-Whitney U tests</p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">🔢</div>
          <h4>C++20</h4>
          <p>Modern parallel execution</p>
        </div>
      </div>

      <div class="references-grid">
        <div class="reference-card">
          <h3>Key References</h3>
          <ul class="reference-links">
            <li><a href="https://dl.acm.org/doi/10.1145/15922.15902" target="_blank">Kajiya - The Rendering Equation</a></li>
            <li><a href="https://graphics.stanford.edu/courses/cs348b-03/papers/veach-chapter9.pdf" target="_blank">Veach - Multiple Importance Sampling</a></li>
            <li><a href="https://www.arnoldrenderer.com/research/importance_sampling_lights.pdf" target="_blank">Conty & Kulla - Importance Sampling of Many Lights</a></li>
          </ul>
        </div>

        <div class="reference-card">
          <h3>Libraries & Tools</h3>
          <ul class="reference-links">
            <li><a href="https://www.embree.org/" target="_blank">Intel Embree</a></li>
            <li><a href="https://www.libsdl.org/" target="_blank">SDL3</a></li>
            <li><a href="https://en.cppreference.com/w/cpp/17" target="_blank">C++20 Standard Library</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Conclusion -->
    <div class="section">
      <div class="project-story">
        <h3>The Journey</h3>
        <p>
          This project pushed me into territory I had never explored before—solid angles, spherical triangles,
          Monte Carlo integration, and probability density functions. These were not just abstract concepts
          to memorize, but tools I had to actually implement and debug in a working ray tracer.
        </p>

        <div class="challenges">
          <h4>Technical Challenges Overcome</h4>
          <ul class="challenge-list">
            <li>Implementing van Oosterom and Strackee's solid angle formula with numerical stability</li>
            <li>Building a Light BVH with Surface Area Orientation Heuristic (SAOH)</li>
            <li>Debugging Monte Carlo estimators where errors produce black screens or noise</li>
            <li>Integrating visibility learning with stochastic tree traversal</li>
            <li>Computing PDFs for MIS by reconstructing tree traversal paths</li>
          </ul>
        </div>

        <p>
          This research confirmed that graphics programming is what I want to pursue further. The combination
          of mathematics, programming, and visual results is exactly what I find most engaging in computer science.
        </p>
      </div>
      <div
          style="
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 56.25%;
      padding-bottom: 0;
      box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
      margin-top: 1.6em;
      margin-bottom: 0.9em;
      overflow: hidden;
      border-radius: 8px;
      will-change: transform;
    "
      >
        <iframe
            loading="lazy"
            style="
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: none;
        padding: 0;
        margin: 0;
      "
            src="https://www.canva.com/design/DAG-B01QGTE/-XeNwqrB6lgwhGypdgypFg/view?embed"
            allow="fullscreen"
            allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeshAreaLightsProject',
  data() {
    return {
      activeStrategy: 0,
      activeScene: 0,
      comparisonSPP: 32,
      sppOptions: [1, 16, 32, 64, 256],

      strategies: [
        {
          id: 'uniform',
          icon: '🎲',
          title: 'Uniform Sampling',
          description: 'Baseline random sampling with equal probability',
          details: 'The simplest approach where each point on the light surface has equal probability of being selected. Triangle selection is performed proportionally to surface area using a precomputed cumulative distribution function (CDF).',
          formula: 'p_A = 1 / A'
        },
        {
          id: 'area-importance',
          icon: '📐',
          title: 'Area-Importance',
          description: 'Solid angle weighted sampling',
          details: 'Accounts for the solid angle subtended by each triangle as seen from the shading point. Uses Arvo\'s spherical triangle sampling algorithm for accurate distribution according to solid angle rather than surface area.',
          formula: 'p_ω(ω) = r² / ((ω · n_L) · A)'
        },
        {
          id: 'hierarchical',
          icon: '🌳',
          title: 'Hierarchical Flux',
          description: 'BVH-based importance traversal',
          details: 'Organizes emissive triangles into a BVH and traverses stochastically based on flux/distance². Uses Surface Area Orientation Heuristic (SAOH) for tree construction and stores orientation bounds for each cluster.',
          formula: 'I_s = (f_a · |cos θ\'_i| · E) / d² × cos(θ\')'
        },
        {
          id: 'visibility-mis',
          icon: '👁️',
          title: 'Visibility-Aware MIS',
          description: 'Learned visibility with multiple importance sampling',
          details: 'Extends hierarchical sampling with learned visibility probabilities from a spatial hash grid. Combines light sampling with BSDF sampling using the balance heuristic for optimal variance reduction.',
          formula: 'I_combined = I_geometric · lerp(1, P_vis, w_vis)'
        }
      ],

      comparisonStrategies: [
        { id: 'uniform', name: 'Uniform' },
        { id: 'area-importance', name: 'Area-Importance' },
        { id: 'hierarchical', name: 'Hierarchical Flux' },
        { id: 'visibility-mis', name: 'Visibility-Aware MIS' }
      ],

      scenes: [
        {
          id: 'quad',
          name: 'Quad Scene',
          description: 'Baseline scenario with a single rectangular area light. All strategies converge identically, confirming implementation correctness.',
          groundTruth: '/images/mesh-lights/quad_ground_truth.bmp',
          mseChart: '/images/mesh-lights/quad_mse_chart.png',
          timeChart: '/images/mesh-lights/quad_time_chart.png',
          results: [
            { strategy: 'Uniform', mse1: '1.47E-01', mse16: '1.92E-02', mse256: '1.34E-03', time256: '0.611' },
            { strategy: 'Area-Importance', mse1: '1.56E-01', mse16: '1.69E-02', mse256: '1.19E-03', time256: '2.905' },
            { strategy: 'Hierarchical Flux', mse1: '1.52E-01', mse16: '1.76E-02', mse256: '1.24E-03', time256: '2.599' },
            { strategy: 'Visibility-Aware MIS', mse1: '1.53E-01', mse16: '1.76E-02', mse256: '1.25E-03', time256: '4.074' }
          ],
          metrics: {
            uniform: { 1: { mse: '1.47E-01', time: '0.02' }, 16: { mse: '1.92E-02', time: '0.07' }, 32: { mse: '9.56E-03', time: '0.14' }, 64: { mse: '4.78E-03', time: '0.28' }, 256: { mse: '1.34E-03', time: '0.61' } },
            'area-importance': { 1: { mse: '1.56E-01', time: '0.03' }, 16: { mse: '1.69E-02', time: '0.24' }, 32: { mse: '8.45E-03', time: '0.48' }, 64: { mse: '4.22E-03', time: '0.97' }, 256: { mse: '1.19E-03', time: '2.91' } },
            hierarchical: { 1: { mse: '1.52E-01', time: '0.02' }, 16: { mse: '1.76E-02', time: '0.21' }, 32: { mse: '8.81E-03', time: '0.42' }, 64: { mse: '4.41E-03', time: '0.85' }, 256: { mse: '1.24E-03', time: '2.60' } },
            'visibility-mis': { 1: { mse: '1.53E-01', time: '0.02' }, 16: { mse: '1.76E-02', time: '0.29' }, 32: { mse: '8.80E-03', time: '0.58' }, 64: { mse: '4.40E-03', time: '1.15' }, 256: { mse: '1.25E-03', time: '4.07' } }
          }
        },
        {
          id: 'bunny',
          name: 'Bunny Scene',
          description: 'Stanford Bunny as mesh light (~200 triangles). Tests hierarchical sampling efficiency with geometric complexity.',
          groundTruth: '/images/mesh-lights/bunny_ground_truth.bmp',
          mseChart: '/images/mesh-lights/bunny_mse_chart.png',
          timeChart: '/images/mesh-lights/bunny_time_chart.png',
          results: [
            { strategy: 'Uniform', mse1: '1.52E-01', mse16: '4.18E-02', mse256: '5.50E-03', time256: '1.701' },
            { strategy: 'Area-Importance', mse1: '1.23E-01', mse16: '1.92E-02', mse256: '3.53E-03', time256: '60.64' },
            { strategy: 'Hierarchical Flux', mse1: '1.44E-01', mse16: '2.99E-02', mse256: '4.30E-03', time256: '4.145' },
            { strategy: 'Visibility-Aware MIS', mse1: '1.26E-01', mse16: '2.37E-02', mse256: '2.51E-03', time256: '32.38' }
          ],
          metrics: {
            uniform: { 1: { mse: '1.52E-01', time: '0.02' }, 16: { mse: '4.18E-02', time: '0.13' }, 32: { mse: '2.79E-02', time: '0.27' }, 64: { mse: '1.40E-02', time: '0.53' }, 256: { mse: '5.50E-03', time: '1.70' } },
            'area-importance': { 1: { mse: '1.23E-01', time: '0.28' }, 16: { mse: '1.92E-02', time: '3.77' }, 32: { mse: '1.28E-02', time: '7.55' }, 64: { mse: '6.41E-03', time: '15.1' }, 256: { mse: '3.53E-03', time: '60.6' } },
            hierarchical: { 1: { mse: '1.44E-01', time: '0.03' }, 16: { mse: '2.99E-02', time: '0.31' }, 32: { mse: '1.99E-02', time: '0.63' }, 64: { mse: '1.00E-02', time: '1.25' }, 256: { mse: '4.30E-03', time: '4.15' } },
            'visibility-mis': { 1: { mse: '1.26E-01', time: '0.12' }, 16: { mse: '2.37E-02', time: '2.05' }, 32: { mse: '1.58E-02', time: '4.09' }, 64: { mse: '7.92E-03', time: '8.18' }, 256: { mse: '2.51E-03', time: '32.4' } }
          }
        },
        {
          id: 'flux-stress',
          name: 'Flux-Stress Scene',
          description: 'Triangles with varying emission intensities. Demonstrates dramatic advantage of flux-weighted hierarchical sampling.',
          groundTruth: '/images/mesh-lights/flux_ground_truth.bmp',
          mseChart: '/images/mesh-lights/flux_mse_chart.png',
          timeChart: '/images/mesh-lights/flux_time_chart.png',
          results: [
            { strategy: 'Uniform', mse1: '8.35E-01', mse16: '5.92E-01', mse256: '1.78E-01', time256: '1.480' },
            { strategy: 'Area-Importance', mse1: '8.23E-01', mse16: '5.75E-01', mse256: '2.39E-01', time256: '40.88' },
            { strategy: 'Hierarchical Flux', mse1: '5.41E-02', mse16: '1.87E-03', mse256: '2.21E-04', time256: '3.311' },
            { strategy: 'Visibility-Aware MIS', mse1: '2.93E-02', mse16: '1.22E-03', mse256: '1.46E-04', time256: '19.06' }
          ],
          metrics: {
            uniform: { 1: { mse: '8.35E-01', time: '0.02' }, 16: { mse: '5.92E-01', time: '0.14' }, 32: { mse: '4.44E-01', time: '0.28' }, 64: { mse: '2.96E-01', time: '0.56' }, 256: { mse: '1.78E-01', time: '1.48' } },
            'area-importance': { 1: { mse: '8.23E-01', time: '0.26' }, 16: { mse: '5.75E-01', time: '2.54' }, 32: { mse: '4.31E-01', time: '5.07' }, 64: { mse: '2.88E-01', time: '10.1' }, 256: { mse: '2.39E-01', time: '40.9' } },
            hierarchical: { 1: { mse: '5.41E-02', time: '0.03' }, 16: { mse: '1.87E-03', time: '0.22' }, 32: { mse: '9.35E-04', time: '0.44' }, 64: { mse: '4.68E-04', time: '0.88' }, 256: { mse: '2.21E-04', time: '3.31' } },
            'visibility-mis': { 1: { mse: '2.93E-02', time: '0.07' }, 16: { mse: '1.22E-03', time: '1.19' }, 32: { mse: '6.10E-04', time: '2.38' }, 64: { mse: '3.05E-04', time: '4.77' }, 256: { mse: '1.46E-04', time: '19.1' } }
          }
        },
        {
          id: 'occlusion-stress',
          name: 'Occlusion-Stress Scene',
          description: 'Significant geometric blocking between light and surfaces. Critical test for visibility-aware sampling methods.',
          groundTruth: '/images/mesh-lights/occlusion_ground_truth.bmp',
          mseChart: '/images/mesh-lights/occlusion_mse_chart.png',
          timeChart: '/images/mesh-lights/occlusion_time_chart.png',
          results: [
            { strategy: 'Uniform', mse1: '1.26E-01', mse16: '2.96E-02', mse256: '2.53E-03', time256: '1.361' },
            { strategy: 'Area-Importance', mse1: '9.79E-02', mse16: '1.87E-02', mse256: '1.42E-03', time256: '41.15' },
            { strategy: 'Hierarchical Flux', mse1: '1.04E-01', mse16: '2.09E-02', mse256: '1.61E-03', time256: '3.528' },
            { strategy: 'Visibility-Aware MIS', mse1: '9.99E-02', mse16: '1.37E-02', mse256: '9.94E-04', time256: '14.49' }
          ],
          metrics: {
            uniform: { 1: { mse: '1.26E-01', time: '0.02' }, 16: { mse: '2.96E-02', time: '0.12' }, 32: { mse: '1.48E-02', time: '0.24' }, 64: { mse: '7.40E-03', time: '0.48' }, 256: { mse: '2.53E-03', time: '1.36' } },
            'area-importance': { 1: { mse: '9.79E-02', time: '0.85' }, 16: { mse: '1.87E-02', time: '2.12' }, 32: { mse: '9.37E-03', time: '4.24' }, 64: { mse: '4.69E-03', time: '8.47' }, 256: { mse: '1.42E-03', time: '41.2' } },
            hierarchical: { 1: { mse: '1.04E-01', time: '0.03' }, 16: { mse: '2.09E-02', time: '0.24' }, 32: { mse: '1.05E-02', time: '0.48' }, 64: { mse: '5.24E-03', time: '0.97' }, 256: { mse: '1.61E-03', time: '3.53' } },
            'visibility-mis': { 1: { mse: '9.99E-02', time: '0.09' }, 16: { mse: '1.37E-02', time: '1.02' }, 32: { mse: '6.85E-03', time: '2.04' }, 64: { mse: '3.43E-03', time: '4.08' }, 256: { mse: '9.94E-04', time: '14.5' } }
          }
        }
      ]
    };
  },
  computed: {
    activeSceneData() {
      return this.scenes[this.activeScene];
    }
  },
  methods: {
    getComparisonImage(strategyId) {
      const scene = this.scenes[this.activeScene];
      return `/images/mesh-lights/${scene.id}_${strategyId}_${this.comparisonSPP}spp.bmp`;
    },
    getMetric(strategyId, type) {
      const scene = this.scenes[this.activeScene];
      const metrics = scene.metrics[strategyId];
      if (metrics && metrics[this.comparisonSPP]) {
        return metrics[this.comparisonSPP][type];
      }
      return 'N/A';
    }
  }
};
</script>

<style scoped>
.mesh-lights-container {
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
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1, #646cff), var(--vp-c-brand-2, #535bf2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.project-tagline {
  font-size: 1.2rem;
  color: var(--vp-c-text-2, #666);
  margin: 0 auto 1.5rem;
}

.project-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
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

.meta-badge {
  background: linear-gradient(135deg, #646cff, #535bf2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Section Styles */
.section {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1, #213547);
}

.section-description {
  margin-bottom: 2rem;
  color: var(--vp-c-text-2, #666);
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 3px solid rgba(100, 108, 255, 0.3);
  background: var(--vp-c-bg-soft, #f9f9f9);
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-color: rgba(100, 108, 255, 0.8);
}

.feature-card h3 {
  color: var(--vp-c-brand, #646cff);
  margin: 0 0 0.5rem 0;
}

.feature-card p {
  color: var(--vp-c-text-2, #666);
  margin: 0;
  font-size: 0.95rem;
}

/* Strategies Grid */
.strategies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.strategy-card {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 10px;
  padding: 1.2rem;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.strategy-card:hover,
.strategy-card.active {
  border-color: #646cff;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(100, 108, 255, 0.15);
}

.strategy-card.active {
  background: linear-gradient(135deg, rgba(100, 108, 255, 0.1), rgba(83, 91, 242, 0.1));
}

.strategy-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.strategy-card h4 {
  color: var(--vp-c-text-1, #213547);
  margin: 0 0 0.3rem 0;
  font-size: 0.95rem;
}

.strategy-card p {
  color: var(--vp-c-text-2, #666);
  font-size: 0.8rem;
  margin: 0;
}

.strategy-details {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #646cff;
}

.strategy-details h3 {
  color: var(--vp-c-brand, #646cff);
  margin-top: 0;
}

.strategy-details p {
  color: var(--vp-c-text-2, #666);
  line-height: 1.7;
}

.formula-box {
  background: #1a1a2e;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  overflow-x: auto;
}

.formula-box code {
  color: #a5d6ff;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 1rem;
}

/* Scene Selector */
.scene-selector {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.scene-tab {
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  background: #e2e8f0;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.9rem;
}

.scene-tab.active,
.scene-tab:hover {
  background: #646cff;
  color: white;
}

/* Scene Results */
.scene-results {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 12px;
  padding: 2rem;
}

.ground-truth-section {
  text-align: center;
  margin-bottom: 2rem;
}

.ground-truth-section h3 {
  color: var(--vp-c-text-1, #213547);
  margin-bottom: 1rem;
}

.ground-truth-image {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: #0f172a;
}

.ground-truth-image img {
  width: 100%;
  display: block;
}

.scene-description {
  color: var(--vp-c-text-2, #666);
  margin-top: 1rem;
  font-style: italic;
}

/* Comparison Section */
.comparison-section {
  margin-top: 2rem;
}

.comparison-section h3 {
  text-align: center;
  color: var(--vp-c-text-1, #213547);
  margin-bottom: 1rem;
}

.spp-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.spp-selector label {
  font-weight: 500;
  color: var(--vp-c-text-2, #666);
}

.spp-buttons {
  display: flex;
  gap: 0.5rem;
}

.spp-buttons button {
  padding: 0.5rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.spp-buttons button.active,
.spp-buttons button:hover {
  background: #646cff;
  color: white;
  border-color: #646cff;
}

/* Comparison Grid */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}

.comparison-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.comparison-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.comparison-image {
  background: #0f172a;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comparison-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.comparison-info {
  padding: 1rem;
}

.comparison-info h4 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1, #213547);
  font-size: 1rem;
}

.metrics {
  display: flex;
  gap: 1.5rem;
}

.metric {
  display: flex;
  flex-direction: column;
}

.metric-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-2, #666);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-value {
  font-weight: 600;
  color: #646cff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
}

/* Results Table */
.results-table-section {
  margin-top: 2rem;
  justify-content: center;
}

.results-table-section h3 {
  text-align: center;
  color: var(--vp-c-text-1, #213547);
  margin-bottom: 1rem;
}

.table-wrapper {
  display: flex;
  justify-content: center;
}

.results-table {
  max-width: 900px;
  margin: 10 auto;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.results-table th,
.results-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.results-table th {
  background: linear-gradient(135deg, #646cff, #535bf2);
  color: white;
  font-weight: 600;
  white-space: nowrap;
}

.results-table th:first-child {
  border-radius: 8px 0 0 0;
}

.results-table th:last-child {
  border-radius: 0 8px 0 0;
}

.results-table td {
  background: white;
  font-family: 'JetBrains Mono', monospace;
}

.results-table td:first-child {
  font-family: inherit;
  font-weight: 500;
}

.results-table tbody tr:hover {
  background: rgba(100, 108, 255, 0.05);
}

/* Charts Section */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

@media (max-width: 900px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

.chart-card {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 12px;
  padding: 1.5rem;
}

.chart-card h3 {
  color: var(--vp-c-text-1, #213547);
  margin: 0 0 1rem 0;
  text-align: center;
  font-size: 1.1rem;
}

.chart-placeholder {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.chart-placeholder img {
  width: 100%;
  display: block;
}

.chart-caption {
  color: var(--vp-c-text-2, #666);
  font-size: 0.85rem;
  text-align: center;
  margin-top: 0.75rem;
  margin-bottom: 0;
}

/* Findings Grid */
.findings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.finding-card {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.finding-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.finding-card.highlight {
  background: linear-gradient(135deg, rgba(100, 108, 255, 0.1), rgba(83, 91, 242, 0.15));
  border: 2px solid rgba(100, 108, 255, 0.3);
}

.finding-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(100, 108, 255, 0.2);
  position: absolute;
  top: 0.5rem;
  right: 1rem;
}

.finding-card h4 {
  color: var(--vp-c-brand, #646cff);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.finding-card p {
  color: var(--vp-c-text-2, #666);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.tech-card {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 10px;
  padding: 1.2rem;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.tech-card:hover {
  border-color: var(--vp-c-brand, #646cff);
  transform: translateY(-3px);
}

.tech-icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.tech-card h4 {
  color: var(--vp-c-text-1, #213547);
  margin: 0 0 0.3rem 0;
  font-size: 0.95rem;
}

.tech-card p {
  color: var(--vp-c-text-2, #666);
  font-size: 0.8rem;
  margin: 0;
}

/* References Grid */
.references-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.reference-card {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.reference-card h3 {
  color: var(--vp-c-text-1, #213547);
  border-bottom: 2px solid var(--vp-c-brand, #646cff);
  padding-bottom: 0.5rem;
  margin-top: 0;
}

.reference-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.reference-links li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--vp-c-brand, #646cff);
}

.reference-links li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand, #646cff);
}

.reference-links a {
  color: var(--vp-c-brand, #646cff);
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
}

.reference-links a:hover {
  color: #646cff;
  text-decoration: underline;
}

/* Project Story */
.project-story {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border-radius: 12px;
  padding: 2rem;
}

.project-story h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1, #213547);
}

.project-story p {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2, #666);
  line-height: 1.7;
}

.challenges {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(100, 108, 255, 0.1);
}

.challenges h4 {
  margin-bottom: 1rem;
  color: var(--vp-c-brand, #646cff);
  font-size: 1.3rem;
}

.challenge-list {
  list-style-type: none;
  padding: 0;
  margin-left: 1.5rem;
}

.challenge-list li {
  padding: 0.6rem 0;
  position: relative;
  line-height: 1.6;
  color: var(--vp-c-text-2, #666);
}

.challenge-list li::before {
  content: "•";
  color: var(--vp-c-brand, #646cff);
  position: absolute;
  left: -1.5rem;
  top: 0.2rem;
  font-size: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.7rem;
  }

  .features-grid,
  .strategies-grid {
    grid-template-columns: 1fr;
  }

  .findings-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .mesh-lights-container {
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

  .spp-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }

  .references-grid {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>