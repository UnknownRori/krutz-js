/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,vue}'
    ],
    theme: {
        extend: {
            screens: {
                'sm': '240px',
                'md': '640px',
                'lg': '800px',
                'xl': '1024px',
                '2xl': '1280px',
            },
        },
    },
    plugins: [],
};