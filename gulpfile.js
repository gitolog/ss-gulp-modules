'use strict';

var basedir = 'www',
    del = require('del'),
    gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    runSequence = require('run-sequence');

var path = {
  src: { // Ïóòè îòêóäà áðàòü èñõîäíèêè
      js: basedir+ '/javascript/src',
      css: basedir+ '/css/src',
      img: basedir+ '/images/src',
      fonts: basedir+ '/fonts'
  },
  out: { // Òóò ìû óêàæåì êóäà ñêëàäûâàòü
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
    .pipe(gulp.dest( path.out.css ))
    .pipe(plugins.livereload());
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
  return gulp.src( path.src.js + '/*.js' )
    .pipe(plugins.concat('common.js'))
    .pipe(gulp.dest( path.out.js ))
    .pipe(plugins.livereload());
});

// Minify JS
gulp.task('minify:js', function() {
  return gulp.src(path.out.js + '/common.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(gulp.dest( path.out.js ));
});

// Minify pictures
gulp.task('minify:images', function() {
  return gulp.src( path.src.img + '/**/*.{jpg,gif,png}' )
    .pipe(plugins.imagemin( { } ))
    .pipe(gulp.dest(path.out.img));
});

// Clean
gulp.task('clean', function () {
  return del([
    // Delete CSS
    path.out.css + '/style.css',
    path.out.css + '/style.min.css',
    // Delete JS
    path.out.js + '/common.js',
    path.out.js + '/common.min.js'
  ]);
});

// Builder
gulp.task('build', function(cb) {
  // runSequence ïîçâîëÿåò çàïóñêàòü çàäà÷è ïî ïîðÿäêó
  runSequence('clean', // 1
    ['compile:css', 'compile:js'], // 2 (òàñêè âûïîëíÿòñÿ âïàðàëëåëü)
    ['minify:css', 'minify:js', 'minify:images'] // 3
  );
});


// Watcher
gulp.task('default', ['compile:css', 'compile:js'], function(){
  plugins.livereload.listen();
  // Îïîâåùàåì Livereload îá èçìåíåíèÿõ â øàáëîíàõ
  gulp.watch(basedir+'/**/*.ftl', function(file){ plugins.livereload.changed(file.basename) });
  gulp.watch( path.src.css + '/*.css', ['compile:css'] );
  gulp.watch( path.out.js + '/**/*.js', ['compile:js'] );
});
