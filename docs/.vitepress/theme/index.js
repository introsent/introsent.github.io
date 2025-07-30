import DefaultTheme from 'vitepress/theme'
import SketchfabViewer from './components/SketchfabViewer.vue'
import Slider from './components/Slider.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('sf-viewer', SketchfabViewer)
        app.component('project-slider', Slider)
    }
}