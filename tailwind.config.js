/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./config/**/*.{yaml,yml}",
    ],
    theme: {
        extend: {},
    },
    safelist: [
        // Add commonly used dynamic classes
        {
            pattern: /bg-(blue|gray)-(100|200|300|400|500|600)/,
            pattern: /text-(sm|base|lg)/,
            pattern: /px-(2|4|6)/,
            pattern: /py-(1|2|3)/,
        },
    ],
    plugins: [],
};
