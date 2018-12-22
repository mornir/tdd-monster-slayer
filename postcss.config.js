const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const isProd = process.env.NODE_ENV === 'production'

const plugins = [tailwindcss('./tailwind.js'), autoprefixer()]

if (isProd) {
  plugins.push(
    purgecss({
      content: ['./src/**/*.html', './src/**/*.vue'],
    })
  )
}

module.exports = {
  plugins,
}
