/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        error: "var(--color-error)",
        contrastError: "var(--color-error-contrast)",
        outline: "var(--color-outline)",
        darkError: "var(--color-dark-error)",
        paper: "var(--color-paper)",
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        'primary-contrast': "var(--color-primary-contrast)",
      },
    },
  },
  plugins: [],
};
