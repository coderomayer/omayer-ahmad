/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      'DM': ['DM Sans', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
      Play: ['var(--font-playfair)'],
      Poppins: ['var(--font-poppins)'],
    }
  },
};

export const plugins = [];
