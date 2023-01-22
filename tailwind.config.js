module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      canela: ['Canela'],
    },
    extend: {
      colors: {
        chantilly: {
          800: '#ff5f40',
          700: '#ff7559',
          600: '#ff8a73',
          500: '#ffb8aa',
          400: '#ffb4a6',
          300: '#ffcabf',
          200: '#ffdfd9',
          100: '#fff6f5',
          50: '#ffb8aa1A',
        },
        glacier: {
          900: '#263d45',
          800: '#406573',
          700: '#5a8da0',
          600: '#73b6ce',
          500: '#80cae5',
          400: '#99d5ea',
          300: '#b3dfef',
          200: '#cceaf5',
          100: '#e6f4fa',
        },
        green: {
          50: '#F0FFF4',
          100: '#C6F6D5',
          200: '#9AE6B4',
          300: '#68D391',
          400: '#48BB78',
          500: '#67c288',
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1C4532',
        },
        facebook: '#4267B2',
        google: '#DB4437',
      },
      width: {
        '1/6': '17%',
      },
      fontSize: {
        xxs: '.55rem',
        '5.5xl': '3.25rem',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
