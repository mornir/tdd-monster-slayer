const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    autoprefixer({
      add: true,
      grid: true,
    }),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.vue'],
    }),
  ],
}
