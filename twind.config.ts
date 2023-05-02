/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugins: {
    "container": "max-w-[1140px]",
    "flex-center-between": "flex items-center justify-between",
  },
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Gordita", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
