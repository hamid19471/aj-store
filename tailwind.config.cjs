/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
            },
            flex: {
                2: "2 2 0%",
            },
        },
    },
    plugins: [],
};
