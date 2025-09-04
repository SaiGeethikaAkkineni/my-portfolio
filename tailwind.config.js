export default {
  darkMode: "class", // << enable dark mode by class
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          900: "#0b1220",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.25), rgba(99,102,241,0) 60%)",
      },
      boxShadow: {
        glow: "0 10px 25px rgba(59,130,246,0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
