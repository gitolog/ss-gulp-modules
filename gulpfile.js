var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require("gulp-uglify"),
    imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

var paths = {
  src: { //Пути откуда брать исходники
      js: 'www/javascript/src',//В стилях и скриптах нам понадобятся только main файлы
      css: 'www/css/src',
      img: 'www/images/src',
      fonts: 'www/fonts'
  },
  out: { //Тут мы укажем куда складывать готовые после сборки файлы
      js: 'www/javascript',
      css: 'www/css',
      img: 'www/images',
      fonts: 'www/fonts'
  }
};

// ЗАДАЧИ

// Styles
gulp.task('styles', function(){
  gulp.src(paths.src.css + '/*.css')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.out.css))
    .pipe(notify({ message: 'Styles compiled' }))
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.out.css))
    .pipe(notify({ message: 'Styles minified' }));
});

// Scripts
gulp.task('scripts', function() {
  gulp.src(paths.src.js + '/**/*.js')
    .pipe(concat('common.js'))
    .pipe(gulp.dest(paths.out.js))
    .pipe(notify({ message: 'Scripts compiled' }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.out.js))
    .pipe(notify({ message: 'Scripts minified' }));
});

// Images
gulp.task('images', function() {
  gulp.src(paths.src.img + '/**/*.{jpg,gif,png}')
    .pipe(imagemin( { } ))
    .pipe(gulp.dest(paths.out.img))
    .pipe(notify({ message: 'Images minified' }));
});

// Clean
gulp.task('clean', function () {
  return del([
    // Delete CSS
    paths.out.css + '/style.css',
    paths.out.css + '/style.min.css',
    // Delete JS
    paths.out.js + '/common.js',
    paths.out.js + '/common.min.js'
  ]);
});

// Build
gulp.task('build', ['clean'], function() {
    return gulp.start('styles', 'scripts', 'images');
});

// По умолчанию
gulp.task('default', ['clean'], function(){
  gulp.start(['styles', 'scripts', 'images']);

  gulp.watch(paths.src.css + '/*.css', ['styles']); // Компилим изменения CSS на лету
  gulp.watch(paths.out.js + '/**/*.js', ['scripts']); // Компилим изменения JS на лету
});
