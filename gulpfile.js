'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var uglifycss = require('gulp-uglifycss');


gulp.task('default', () =>
gulp.src('./assets/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./assets/css'))
);

gulp.task('sass', function () {
 gulp.src('assets/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss({
    "maxLineLen": 80,
    "uglyComments": true
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./assets/css'));

  return new Promise(function(resolve, reject) {
    console.log("HTTP Server Started");
    resolve();
  });
});


gulp.task('browser-sync', function() {
  browserSync.init({
    notify: config.notify,
    open: config.open,
    port: config.port,
    server: {
      baseDir: config.server.basedir
    },
    xip: config.xip
  });
});



// Watch
gulp.task('sass:watch', function () {
  gulp.watch('./assets/**/*.scss', ['sass']);
 });

// Watch files for changes, recompile/rebuild and reload the browser
gulp.task('watch', function() {
  // No browser reload needed here, browserSync injects the stylesheet into browsers
  gulp.watch('./assets/**/*.scss', ['sass']);
});