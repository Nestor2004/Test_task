/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: 'rgba(72, 72, 72, 1)',
        customGreen:'rgba(31, 255, 26, 1)',
        customBlack:'rgba(32, 32, 32, 1)',
        customGray_2:'rgba(232, 232, 232, 1)',
        placeholderColor:'rgba(72, 72, 72, 1)',
        customGreen_2:'rgba(4, 170, 0, 1)',
        customWhite:'rgba(245, 245, 245, 1)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
  },
  plugins: [],
}
};
