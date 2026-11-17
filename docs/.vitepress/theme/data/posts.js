// Blog posts. A post without `link` is shown as "coming soon".

export const posts = [
    {
        id: 'font-ram-optimization',
        title: 'Font RAM Optimization in Unity',
        date: '21 June 2026',
        excerpt: 'TextMesh Pro needs some fonts in a Resources folder, while Addressables packs the same fonts into its own bundles, so they end up in memory twice. How I tracked down every place that duplication hides and stripped it out before each build.',
        tags: ['Unity', 'VR', 'Memory'],
        link: '/projects/blog-font-deduplication'
    },
    {
        id: 'far-lod-batching',
        title: 'Far LOD Batching with Compute Shaders & Indirect Drawing',
        date: 'Coming soon',
        excerpt: 'Batching far-LOD meshes on the GPU with compute shaders and indirect draw calls, cutting CPU overhead on VR platforms where the main thread matters.',
        tags: ['Unity', 'Compute shaders', 'Rendering']
    }
]
