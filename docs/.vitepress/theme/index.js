import DefaultTheme from 'vitepress/theme'
import SketchfabViewer from './components/SketchfabViewer.vue'
import Slider from './components/Slider.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import Salamander from "./components/Salamander.vue";
import CanvaEmbed from './components/CanvaEmbed.vue';
import Raytracer from './components/Raytracer.vue';
import Rasterizer from './components/Rasterizer.vue';
import ReelOrNothing from "./components/ReelOrNothing.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('sf-viewer', SketchfabViewer)
        app.component('project-slider', Slider)
        app.component('about-me', AboutMe)
        app.component('skills', Skills)
        app.component('contact', Contact)
        app.component('projects-page', ProjectsPage)
        app.component('salamander', Salamander)
        app.component('canva-embed', CanvaEmbed)
        app.component('raytracer', Raytracer)
        app.component('rasterizer', Rasterizer)
        app.component('reel-or-nothing', ReelOrNothing)
    }
}