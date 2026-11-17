import DefaultTheme from 'vitepress/theme'
import './custom.css'

import HomePage from './components/HomePage.vue'
import HireCta from './components/HireCta.vue'
import ForefrontCase from './components/ForefrontCase.vue'
import RecommendationLetter from './components/RecommendationLetter.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import Resume from './components/Resume.vue'
import Blog from './components/Blog.vue'
import FontOptimization from './components/FontOptimization.vue'

import SketchfabViewer from './components/SketchfabViewer.vue'
import CanvaEmbed from './components/CanvaEmbed.vue'
import Salamander from './components/Salamander.vue'
import Raytracer from './components/Raytracer.vue'
import Rasterizer from './components/Rasterizer.vue'
import ReelOrNothing from './components/ReelOrNothing.vue'
import Nocturne from './components/Nocturne.vue'
import NinjaGaiden from './components/NinjaGaiden.vue'
import PPGA from './components/PPGA.vue'
import MeshAreaLights from './components/MeshAreaLights.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('home-page', HomePage)
        app.component('hire-cta', HireCta)
        app.component('forefront-case', ForefrontCase)
        app.component('recommendation-letter', RecommendationLetter)
        app.component('projects-page', ProjectsPage)
        app.component('resume', Resume)
        app.component('blog', Blog)
        app.component('font-optimization', FontOptimization)

        app.component('sf-viewer', SketchfabViewer)
        app.component('canva-embed', CanvaEmbed)
        app.component('salamander', Salamander)
        app.component('raytracer', Raytracer)
        app.component('rasterizer', Rasterizer)
        app.component('reel-or-nothing', ReelOrNothing)
        app.component('nocturne', Nocturne)
        app.component('ninja-gaiden', NinjaGaiden)
        app.component('ppga', PPGA)
        app.component('mesh-area-lights', MeshAreaLights)
    }
}
