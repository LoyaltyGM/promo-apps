module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        fontFamily: {
            bungee: ["BungeeShade-Regular", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require('@tailwindcss/forms')],
};
