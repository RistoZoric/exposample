const mix = require('laravel-mix');

mix
  .js('resources/js/lazyload.js', 'public/js')
  .js('resources/js/preloader.js', 'public/js')
  .postCss('resources/css/app.v2.css', 'public/css', [
    require('tailwindcss'),
  ])
  .version()
  .sourceMaps();
