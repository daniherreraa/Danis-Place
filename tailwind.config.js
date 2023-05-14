/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'dark': '#1C1B1F',
      'darkless': '#25242A',
      'darklessText': '#DFDBE6',
      'purple': '#636AF2',
      'lightPurple': '#C6BFFF',
      'lightGray': '#E5E1E6',
      'bright': '#F2F2F2',
      'outline': '#928F99',
    },
  },
  plugins: [],
}
