/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugins: {
    "container": "max-w-[1140px]",
    "flex-center-between": "flex items-center justify-between",
    "justify-content-unset": { justifyContent: "unset" },
    "Roboto-Regular": { fontFamily: "Roboto" },
    "post-gradient": {
      backgroundImage: "linear-gradient(0deg,rgba(0,0,0,.35),transparent 75%)",
    },
  },
  theme: {
    extend: {
      boxShadow: {
        "first-steps": "0px 0px 10px 0px rgba(0, 0, 0, 0.07)",
        "about-security": "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
        "post-blog": "0 0 10px 0 rgba(0,0,0,.15)",
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
