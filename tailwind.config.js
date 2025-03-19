/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addUtilities }) {
        const writingModeUtilities = {
          '.writing-mode-horizontal-tb': {
            writingMode: 'horizontal-tb',
          },
          '.writing-mode-vertical-rl': {
            writingMode: 'vertical-rl',
          },
          '.writing-mode-vertical-lr': {
            writingMode: 'vertical-lr',
          },
        };
        const textOrientationUtilities = {
          '.text-orientation-mixed': {
            textOrientation: 'mixed',
          },
          '.text-orientation-upright': {
            textOrientation: 'upright',
          },
        };
        addUtilities(writingModeUtilities, ['responsive', 'hover']);
        addUtilities(textOrientationUtilities, ['responsive', 'hover']);
      },
    ],
  };