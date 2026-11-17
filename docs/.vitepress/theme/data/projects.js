// Single source of truth for project cards (home page + projects page).
// poster: static image shown by default. preview: short silent clip, only
// fetched when the card is hovered.

export const projects = [
    {
        id: 'salamander',
        title: 'Salamander',
        group: 'Rendering',
        summary: 'My Vulkan renderer in C++20. Deferred shading, PBR, image-based lighting, shadow maps and HDR with automatic exposure.',
        tags: ['Vulkan', 'C++20', 'Deferred', 'PBR'],
        link: '/projects/salamander',
        poster: '/images/posters/salamander.webp',
        preview: '/videos/previews/salamander.mp4'
    },
    {
        id: 'mesh-area-lights',
        title: 'Mesh Area Lights',
        group: 'Rendering',
        summary: 'Research into light sampling for Monte Carlo path tracing: four strategies compared on noise (MSE) and render time.',
        tags: ['Path tracing', 'Sampling', 'C++'],
        link: '/projects/mesh-area-lights',
        poster: '/images/posters/mesh-area-lights.webp'
    },
    {
        id: 'rasterizer',
        title: 'Dual Rasterizer',
        group: 'Rendering',
        summary: 'The same scene drawn by a CPU software rasterizer and by DirectX 11, switchable at runtime.',
        tags: ['DirectX 11', 'Software rendering', 'C++'],
        link: '/projects/rasterizer',
        poster: '/images/posters/rasterizer.webp',
        preview: '/videos/previews/rasterizer.mp4'
    },
    {
        id: 'raytracer',
        title: 'CPU Raytracer',
        group: 'Rendering',
        summary: 'A raytracer written from scratch in C++, with global illumination.',
        tags: ['Raytracing', 'C++'],
        link: '/projects/raytracer',
        poster: '/images/posters/raytracer.webp',
        preview: '/videos/previews/raytracer.mp4'
    },
    {
        id: 'nocturne',
        title: 'Nocturne Engine',
        group: 'Engine & gameplay',
        summary: 'A component-based C++20 game engine, with a Q*bert remake as its test game.',
        tags: ['C++20', 'Engine architecture'],
        link: '/projects/nocturne',
        poster: '/images/posters/nocturne.webp',
        preview: '/videos/previews/nocturne.mp4'
    },
    {
        id: 'ninja-gaiden',
        title: 'Ninja Gaiden Remake',
        group: 'Engine & gameplay',
        summary: 'A recreation of the NES game in C++: gameplay, enemies and level flow.',
        tags: ['C++', 'Gameplay'],
        link: '/projects/ninja-gaiden',
        poster: '/images/posters/ninja-gaiden.webp',
        preview: '/videos/previews/ninja-gaiden.mp4'
    },
    {
        id: 'reel-or-nothing',
        title: 'Reel or Nothing',
        group: 'Math & physics',
        summary: 'Couch PvP fishing game made in a team. I did the physics programming.',
        tags: ['Physics', 'Team project'],
        link: '/projects/reel-or-nothing',
        poster: '/images/posters/reel-or-nothing.webp',
        preview: '/videos/previews/reel-or-nothing.mp4'
    },
    {
        id: 'ppga',
        title: 'PPGA Racing',
        group: 'Math & physics',
        summary: 'A small racing game where every transform uses plane-based projective geometric algebra instead of matrices.',
        tags: ['Geometric algebra', 'Math', 'C++'],
        link: '/projects/ppga',
        poster: '/images/posters/ppga.webp',
        preview: '/videos/previews/ppga.mp4'
    }
]

export const groups = ['Rendering', 'Engine & gameplay', 'Math & physics']
