/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugins: {
    "container": "max-w-[1140px]",
    "flex-center-between": "flex items-center justify-between",
    "justify-content-unset": { justifyContent: "unset" },
    "Roboto-Regular": { fontFamily: "Roboto" },
  },
  theme: {
    extend: {
      boxShadow: {
        "first-steps": "0px 0px 10px 0px rgba(0, 0, 0, 0.07)",
        "about-security": "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
      },
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
