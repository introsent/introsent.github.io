// .vitepress/config.js
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
            content: "frame-src https://sketchfab.com https://*.canva.com; media-src 'self' data:"
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }]
    ],

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Projects', link: '/projects' }
        ],
        footer: {
            message: 'Designed and built by Ivans Minajevs.',
            copyright: '© 2025 Ivans Minajevs | All rights reserved.'
        }
    }
}