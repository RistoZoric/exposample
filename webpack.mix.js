const mix = require('laravel-mix');
const path = require('path');

mix
  .js('resources/js/app.js', 'public/js')
  .react()
  .alias({
    '@': path.resolve('resources/js'),
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
  })
  .version();
