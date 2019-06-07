'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var pump = require('pump');


gulp.task('default',function() {
  gulp.watch('assets/sass/*.scss',gulp.series('sass'));
  gulp.watch('assets/src/*js',gulp.series('compress'));
});

gulp.task('sass', function () {
 gulp.src('assets/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss({
    "maxLineLen": 80,
    "uglyComments": true
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
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
        gulp.src('assets/src/*.js'),
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