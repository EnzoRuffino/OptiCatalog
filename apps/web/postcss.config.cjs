const path = require('node:path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const tailwindConfigPath = path.join(__dirname, 'tailwind.config.cjs');

module.exports = {
  plugins: [tailwindcss({ config: tailwindConfigPath }), autoprefixer],
};
