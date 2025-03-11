/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',  // TODO: remove this when dark mode is properly built out (then will default to media, based on user preference)
    mode: "all",
    content: [
        "./src/**/*.{rs,html,css}",
        "./dist/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#eff6ff",
                    "100": "#dbeafe",
                    "200": "#bfdbfe",
                    "300": "#93c5fd",
                    "400": "#60a5fa",
                    "500": "#3b82f6",
                    "600": "#2563eb",
                    "700": "#1d4ed8",
                    "800": "#1e40af",
                    "900": "#1e3a8a",
                    "950": "#172554"
                }
            }
        },
        // fontFamily: {
        //     'body': [
        //         'Inter',
        //         'ui-sans-serif',
        //         'system-ui',
        //         '-apple-system',
        //         'system-ui',
        //         'Segoe UI',
        //         'Roboto',
        //         'Helvetica Neue',
        //         'Arial',
        //         'Noto Sans',
        //         'sans-serif',
        //         'Apple Color Emoji',
        //         'Segoe UI Emoji',
        //         'Segoe UI Symbol',
        //         'Noto Color Emoji'
        //     ],
        //     'sans': [
        //         'Inter',
        //         'ui-sans-serif',
        //         'system-ui',
        //         '-apple-system',
        //         'system-ui',
        //         'Segoe UI',
        //         'Roboto',
        //         'Helvetica Neue',
        //         'Arial',
        //         'Noto Sans',
        //         'sans-serif',
        //         'Apple Color Emoji',
        //         'Segoe UI Emoji',
        //         'Segoe UI Symbol',
        //         'Noto Color Emoji'
        //     ],
        //     // for some reason, mono is not applying with all this here...
        //     'mono': [
        //         'ui-monospace',
        //     ]
        // }
    },
    plugins: [
    ],
};
