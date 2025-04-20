/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
                aldrich: ["Aldrich", "sans-serif"],
                albertSans: ["Albert Sans", "sans-serif"],
            },
            colors: {
                primary: "#31C61D",
                secondary: "#00AEE6",
                dark: "#1E1E1E",
                gray: {
                    light: "#F5F5F5",
                    medium: "#6C6C6C",
                },
            },
            backgroundImage: {
                "gradient-primary":
                    "linear-gradient(210.39deg, #31C61D 4.11%, rgba(0, 174, 230, 0.901961) 88.82%)",
                "gradient-shade":
                    "linear-gradient(210.39deg, #07192C 4.11%, #233447 88.82%)",
            },
        },
    },
    plugins: [],
};
