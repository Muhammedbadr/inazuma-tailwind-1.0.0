/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}" // veya kullandığın dosya uzantılarına göre
  ],
  darkMode: ["selector", "[data-web-theme=dark]"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // Renk tanımların burada kalabilir
      },
      // Diğer extend ayarları da burada
    },
  },
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1d222e', // لون أزرق غامق
          800: '#1d222e'  // لون حدود أزرق غامق
        }
      }
    }
  }
};
