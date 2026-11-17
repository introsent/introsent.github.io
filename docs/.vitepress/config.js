const SITE_URL = 'https://introsent.github.io'
const DESCRIPTION =
    'Ivans Minajevs: freelance graphics and optimization programmer. Memory, CPU and GPU optimization, profiling and rendering features for games, from standalone VR to custom C++ engines.'

export default {
    title: 'Ivans Minajevs',
    titleTemplate: ':title · Ivans Minajevs',
    description: DESCRIPTION,
    lang: 'en',
    appearance: 'dark',

    sitemap: {
        hostname: SITE_URL
    },

    head: [
        ['meta', { name: 'theme-color', content: '#0d0e12' }],
        ['meta', {
            'http-equiv': 'Content-Security-Policy',
            content: "frame-src https://sketchfab.com https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://*.canva.com; media-src 'self' data:"
        }],

        // Fonts: two families, few weights, swap so text renders immediately
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Work+Sans:wght@400;500&display=swap'
        }],

        // Social previews
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'Ivans Minajevs' }],
        ['meta', { property: 'og:title', content: 'Ivans Minajevs · Freelance graphics & optimization programmer' }],
        ['meta', { property: 'og:description', content: DESCRIPTION }],
        ['meta', { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` }],
        ['meta', { property: 'og:url', content: SITE_URL }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
    ],

    themeConfig: {
        nav: [
            { text: 'Services', link: '/#services' },
            { text: 'Forefront', link: '/career/forefront' },
            {
                text: 'Projects',
                items: [
                    { text: 'All projects', link: '/projects' },
                    {
                        text: 'Rendering',
                        items: [
                            { text: 'Salamander (Vulkan)', link: '/projects/salamander' },
                            { text: 'Mesh Area Lights', link: '/projects/mesh-area-lights' },
                            { text: 'Dual Rasterizer', link: '/projects/rasterizer' },
                            { text: 'CPU Raytracer', link: '/projects/raytracer' }
                        ]
                    },
                    {
                        text: 'Engine & gameplay',
                        items: [
                            { text: 'Nocturne Engine', link: '/projects/nocturne' },
                            { text: 'Ninja Gaiden Remake', link: '/projects/ninja-gaiden' }
                        ]
                    },
                    {
                        text: 'Math & physics',
                        items: [
                            { text: 'Reel or Nothing', link: '/projects/reel-or-nothing' },
                            { text: 'PPGA Racing', link: '/projects/ppga' }
                        ]
                    }
                ]
            },
            { text: 'Blog', link: '/blog' },
            { text: 'Resume', link: '/resume' },
            { text: 'Hire me', link: '/#contact' }
        ],

        footer: {
            message: 'Freelance graphics & optimization programming · Riga, Latvia · working remotely',
            copyright: '© 2026 Ivans Minajevs'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/introsent', ariaLabel: 'GitHub' },
            { icon: 'linkedin', link: 'https://linkedin.com/in/ivans-minajevs-991bbb214', ariaLabel: 'LinkedIn' }
        ]
    }
}
