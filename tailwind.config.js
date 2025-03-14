/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                aldrich: ["Aldrich", "sans-serif"],
                albertSans: ["Albert-Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
