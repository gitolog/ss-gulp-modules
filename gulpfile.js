'use strict';

var basedir = 'www',
    del = require('del'),
    gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    imageminPngquant = require('imagemin-pngquant'),
    runSequence = require('run-sequence');

var path = {
  src: { // Пути откуда брать исходники
      js: basedir+ '/javascript/src',
      css: basedir+ '/css/src',
      img: basedir+ '/images/src',
      fonts: basedir+ '/fonts'
  },
  out: { // Тут мы укажем куда складывать
      js: basedir+ '/javascript',
      css: basedir+ '/css',
      img: basedir+ '/images',
      fonts: basedir+ '/fonts'
  }
};

//--------------------------------------------------------------
//    TASKS
//--------------------------------------------------------------

// Compile CSS
gulp.task('compile:css', function(){
  return gulp.src( path.src.css + '/*.css' )
    .pipe(plugins.convertEncoding({to: 'UTF-8'}))
    .pipe(plugins.autoprefixer({
      browsers: [
          '> 1%',
          'last 2 versions',
          'firefox >= 4',
          'safari 7',
          'safari 8',
          'IE 8',
          'IE 9',
          'IE 10',
          'IE 11'
      ], cascade: false })
    )
    .pipe(plugins.concat('style.css'))
    .pipe(plugins.convertEncoding({to: 'Windows-1251'}))
    .pipe(gulp.dest( path.out.css ))
    .pipe(plugins.livereload());
});

// Concat vendor CSS
gulp.task('compile-vendor:css', function() {
  return gulp.src([
      path.src.css + '/vendor/**/*.css',
      '!'+path.src.css+'/vendor/**/*.min.css',
      '!'+path.src.css+'/vendor/**/*-min.css'
    ])
    .pipe(plugins.concat('vendor.css'))
    .pipe(gulp.dest( path.out.css ));
});

// Minify CSS
gulp.task('minify:css', function() {
  return gulp.src([
        path.out.css + '/*.css',
        '!'+path.out.css+'/*.min.css',
        '!'+path.out.css+'/*-min.css'
    ])
    .pipe(plugins.minifyCss())
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(gulp.dest( path.out.css ));
});

// Compile JS
gulp.task('compile:js', function() {
  return gulp.src( [
      path.src.js + '/*.js'
    ])
    .pipe(plugins.concat('common.js'))
    .pipe(gulp.dest( path.out.js ))
    .pipe(plugins.livereload());
});

// Concat vendor JS
gulp.task('compile-vendor:js', function() {
  return gulp.src( [
      path.src.js + '/vendor/**/*.js',
      '!'+path.src.js + '/vendor/jquery/jquery-*.js', // Exclude Jquery
      '!'+path.src.js + '/vendor/material/*.js', // Exclude Material
    ])
    .pipe(plugins.concat('vendor.js'))
    .pipe(gulp.dest( path.out.js ))
    .pipe(plugins.livereload());
});

// Minify JS
gulp.task('minify:js', function() {
  return gulp.src([
      path.out.js + '/common.js',
      path.out.js + '/vendor.js'
    ])
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(gulp.dest( path.out.js ));
});

// Minify pictures
gulp.task('minify:images', function() {
  return gulp.src( path.src.img + '/**/*.{jpg,gif,png}' )
    .pipe(plugins.imagemin({
      progressive: true,
      use: [imageminPngquant({ quality: '65-80', speed: 4 })]
    }))
    .pipe(gulp.dest(path.out.img));
});

// Clean
gulp.task('clean', function () {
  return del([
    // Delete CSS
    path.out.css + '/style.css',
    path.out.css + '/style.min.css',
    path.out.css + '/vendor.css',
    path.out.css + '/vendor.min.css',
    // Delete JS
    path.out.js + '/common.js',
    path.out.js + '/common.min.js'
  ]);
});

// Builder
gulp.task('build', function(cb) {
  // runSequence позволяет запускать задачи по порядку
  runSequence('clean', // 1
    ['compile:css', 'compile-vendor:css', 'compile:js', 'compile-vendor:js'], // 2 (таски выполнятся впараллель)
    ['minify:css', 'minify:js', 'minify:images'] // 3
  );
});


// Watcher
gulp.task('default', function(){
  plugins.livereload.listen();
  // Оповещаем Livereload об изменениях в шаблонах
  gulp.watch(basedir+'/**/*.ftl', function(file){ plugins.livereload.changed("file") });
  gulp.watch( path.src.css + '/*.css', ['compile:css'] );
  gulp.watch( path.out.js + '/**/*.js', ['compile:js'] );
});
