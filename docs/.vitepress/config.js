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
            content: "frame-src https://sketchfab.com; media-src 'self' data:"
        }]
    ],

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Projects', link: '/test-component' }
        ],
        sidebar: [
            { text: 'Home', link: '/' },
            { text: 'Projects', link: '/test-component' }
        ]
    }
}