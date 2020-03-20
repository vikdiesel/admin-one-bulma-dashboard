const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.babel(['src/js/main.js'], 'dist/js/main.js')
  .babel(['src/js/chart.sample.js'], 'dist/js/chart.sample.js')
  .sass('src/scss/main.scss', 'dist/css')
  .copyDirectory('src/img', 'dist/img');
