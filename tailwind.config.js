module.exports = {
    content: [
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // Add custom fonts
    fonts: ["./assets/fonts"],
    // Add default fonts
    fontSizes: {
        base: "16px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "40px",
    },
    fontFamilys: {
        sans: ["Inter var", "sans-serif"],
        serif: ["Georgia", "serif"],
        main: ['all-demi']
    }
};