/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const colors = {
    foreground: 'var(--foreground)',
    secondary: 'var(--secondary)',
    passive: 'var(--passive)',
    passive2: 'var(--passive2)',
    text_passive: 'var(--text_passive)',
    primary: 'var(--primary)',
    primary2: 'var(--primary2)',
}

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: { colors }
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    extend: { colors }
                }
            }
        })
    ],
}