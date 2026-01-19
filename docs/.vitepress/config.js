export default {
    title: 'Ivans Minajevs',
    description: 'Portfolio website of Ivans Minajevs',

    head: [
        ['meta', {
            'http-equiv': 'Permissions-Policy',
            content: 'accelerometer=*, gyroscope=*, fullscreen=*'
        }],
        ['meta', {
            'http-equiv': 'Content-Security-Policy',
            content: "frame-src https://sketchfab.com https://www.youtube.com https://player.vimeo.com https://*.canva.com; media-src 'self' data:"
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }],
        ['link', {
            rel: 'preload',
            href: '/videos/ninja-gaiden.mp4',
            as: 'video',
            type: 'video/mp4'
        }],
        ['link', {
            rel: 'preload',
            href: '/videos/ppga.mp4',
            as: 'video',
            type: 'video/mp4'
        }],
        ['link', {
            rel: 'preload',
            href: '/videos/qbert-video.mp4',
            as: 'video',
            type: 'video/mp4'
        }],
        ['link', {
            rel: 'preload',
            href: '/videos/rasterizer.mp4',
            as: 'video',
            type: 'video/mp4'
        }],
        ['link', {
            rel: 'preload',
            href: '/videos/raytracer.mp4',
            as: 'video',
            type: 'video/mp4'
        }],
        ['link', {
            rel: 'preload',
            href: '/videos/reel-or-nothing.mp4',
            as: 'video',
            type: 'video/mp4'
        }],
        ['link', {
            rel: 'preload',
            href: '/videos/salamander.mp4',
            as: 'video',
            type: 'video/mp4'
        }]
    ],

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Resume', link: '/resume' },
            {
                text: 'Projects',
                items: [
                    { text: 'Overview', link: '/projects' },
                    {
                        text: 'Graphics',
                        items: [
                            { text: 'Salamander', link: '/projects/salamander' },
                            { text: 'Mesh Area Lights', link: '/projects/mesh-area-lights'},
                            { text: 'Dual Rasterizer', link: '/projects/rasterizer' },
                            { text: 'Software Raytracer', link: '/projects/raytracer' }
                        ]
                    },
                    {
                        text: 'Math & Physics',
                        items: [
                            { text: 'Reel or nothing!', link: '/projects/reel-or-nothing' },
                            { text: 'PPGA', link: '/projects/ppga' }
                        ]
                    },
                    {
                        text: 'Engine',
                        items: [
                            { text: 'Nocturne Engine', link: '/projects/nocturne' }
                        ]
                    },
                    {
                        text: 'Gameplay',
                        items: [
                            { text: 'Ninja Gaiden', link: '/projects/ninja-gaiden' }
                        ]
                    }
                ]
            }
        ],
        footer: {
            message: 'Designed and built by Ivans Minajevs.',
            copyright: '© 2025 Ivans Minajevs | All rights reserved.'
        },

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/introsent',
                label: 'GitHub'
            },
            {
                icon: 'linkedin',
                link: 'https://linkedin.com/in/ivans-minajevs-991bbb214',
                label: 'LinkedIn'
            },
            {
                icon: {
                    svg: `
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1 0.9 2 2 2h16
                       c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 2v0.01L12 11
                       4 6.01V6h16zm0 12H4V8.99l8 5l8-5V18z"/>
            </svg>
          `
                },
                link: 'mailto:ivans.minajevs@outlook.com',
                label: 'Email'
            }
        ],

        mobileMenu: {
            burgerLabel: 'Menu',
            closeLabel: 'Close',
            categories: [
                {
                    title: 'Graphics',
                    projects: [
                        { title: 'Salamander', link: '/projects/salamander' },
                        { title: 'Mesh Area Lights', link: '/projects/mesh-area-lights'},
                        { title: 'Dual Rasterizer', link: '/projects/rasterizer' },
                        { title: 'Software Raytracer', link: '/projects/raytracer' }
                    ]
                },
                {
                    title: 'Math & Physics',
                    projects: [
                        { title: 'Reel or nothing!', link: '/projects/reel-or-nothing' },
                        { title: 'PPGA', link: '/projects/ppga' }
                    ]
                },
                {
                    title: 'Engine',
                    projects: [
                        { title: 'Nocturne Engine', link: '/projects/nocturne' }
                    ]
                },
                {
                    title: 'Gameplay',
                    projects: [
                        { title: 'Ninja Gaiden', link: '/projects/ninja-gaiden' }
                    ]
                }
            ]
        }
    }
}