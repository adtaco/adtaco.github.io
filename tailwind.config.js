module.exports = {
  content: [
    './docs/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './tailwind.safelist.txt',
  ],
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  important: false,
  important: "#__docusaurus",
  theme: {
    extend: {
      fontFamily: {
        'cursive' : ['Satisfy', 'cursive'],
        'brand'   : ['Londrina Solid', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'display' : ['Poppins', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'sans'    : ['Roboto', 'Anybody', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  corePlugins:  {
    // preflight: false, // disable Tailwind's reset
    visibility: false,
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};
