'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer  = require('gulp-autoprefixer');
const browserSync   = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('default',function() {
  gulp.watch('assets/sass/*.scss',gulp.series('sass'));
  gulp.watch('assets/src/*js',gulp.series('compress'));
});

gulp.task('sass', function () {
 gulp.src('assets/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(uglifycss({
    "maxLineLen": 80,
    "uglyComments": true
  }))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./assets/css'))
  .pipe(browserSync.stream());

  return new Promise(function(resolve, reject) {
    console.log("HTTP Server Started");
    resolve();
  });
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('assets/js/src/*.js'),
        uglify(),
        gulp.dest('assets/dist')
    ],
    cb
  );
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