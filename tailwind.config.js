module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'first': '#5fa5cc', // todo test all of these, primary
        'second': '#f93d3f', // secondary / danger / red cta
        'third': '#d5e9d6', // success / green cta
        'fourth': '#fef7ea', // warning / yellow cta
        'fifth': '#e6f7fd', // info / blue cta / light primary variant
        'sixth': '#f9fefe', // very light primary variant
      },
      fontSize: {
        xxs: '0.7rem',
      }
    },
  },
  variants: {},
  plugins: [],
}