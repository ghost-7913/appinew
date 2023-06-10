/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
        'border-color':"#C5C5C5",
        'primary-color':'#FFAA5C',
        'secondary-color':'#8c8c8c',
        'title-color':'#8f8f8f'

    }
  },
  plugins: [],
}
