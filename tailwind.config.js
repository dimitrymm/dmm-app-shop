/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            backgroundImage: {
                'back-shop': "url('./assets/images/mercado.jpg')",
            },
        },
    },
    plugins: [],
};
