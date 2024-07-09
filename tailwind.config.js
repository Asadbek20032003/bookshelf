//  @type {import('tailwindcss').Config}
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 32px 0px rgba(50, 50, 50, 0.1)",
        inputshadow: "0px 4px 18px 0px rgba(51, 51, 51, 0.04)",
      },
    },
  },
  variants: {},
  plugins: [],
};
