'use strict';

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var chalk = require('chalk');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var sassLint = require('gulp-sass-lint');
var uglify = require('gulp-uglify');
var replace = require('gulp-url-replace');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var htmlMinify = require('gulp-htmlmin');
var imageMinify = require('gulp-tinypng');
var gulpCopy = require('gulp-copy');

var paths = {
  src : {
    root: './src',
    html: './src/html/*.html',
    js: './src/js/*.js',
    scss: './src/scss/*.scss',
    scssPartials: './src/scss/partials/*.scss',
    scssInuit: './node_modules/inuitcss/*.scss',
    scssMQ: './src/scss/sass_mq_overrides.scss',
    images: './src/images/*'
  },
  dist: {
    root: './dist',
    html: './dist',
    js: './dist/*.js',
    minified: './dist/minified',
    css: './dist/css',
    images: './dist/images',
    scssInuit: './dist/*.css',
    clean: './dist/*',
  }
};

// Remove all previously generated files.
gulp.task('clean', function() {
  return del([paths.dist.clean]).then(paths => {
    console.info(chalk.green( 'Deleted files and folders:\n', paths.join('\n') ));
  });
});

// JS Lint
gulp.task('js-lint', function() {
  return gulp.src(paths.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// JS Concat and Uglify
gulp.task('js-uglify', function (cb) {
  return gulp.src([paths.src.js])
    .pipe(concat('HCON-Script.js')) //RENAME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    .pipe(rename('HCON-Script.js')) //RENAME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.minified));
});






// SCSS Tasks
// gulp.task('sass', function () {
//   return gulp.src([paths.src.scss,paths.src.scssPartials,paths.src.scssInuit])
//     .pipe(sass().on('error', sass.logError))
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest(paths.dist.minified));
// });


//paths.src.scssInuit,paths.src.scssMQ,
gulp.task('sass', function () {
  return gulp.src([paths.src.scss,paths.src.scssPartials])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(paths.dist.css));
});


//git submodule update    ---- this will get the files to show
//add inuitcss to the dependencies list so when npm install is performed for this gulpfile then it wil be in nodemodules.




//SASS Lint
gulp.task(`sass-lint`, () => {
  return gulp.src(paths.src.scss)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// CSS Tasks
gulp.task('minify-css', function() {
  return gulp.src(paths.dist.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.dist.minified));
});

// HTML Tasks
gulp.task('minify-html', function() {
  return gulp.src(paths.src.html)
    .pipe(htmlMinify({
      collapseWhitespace: true,
      minifyCSS: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }))
    .pipe(gulp.dest(paths.dist.html));
});

// Image Tasks
gulp.task('minify-img', function() {
  return gulp.src(paths.src.images)
      .pipe(imageMinify('FtmO8Kq1X4fIvgco5rDm3dfrZXCWP3gK'))
      .pipe(gulp.dest(paths.dist.images));
});

// Watch Tasks
gulp.task('watch', function() {
  gulp.watch([paths.src.scss,paths.src.scssPartials], ['sass-lint', 'sass']);
  gulp.watch(paths.src.js, ['js-lint', 'js-uglify']);
  gulp.watch(paths.src.html, ['minify-html']);
});

//Default Tasks
gulp.task('default', ['clean', 'lint-html', 'lint-css',  'lint-js', 'watch']);

//Lint Tasks
gulp.task('lint-js', ['js-lint', 'sass-lint']);

//CSS Tasks
gulp.task('lint-css', ['sass-lint', 'sass']);

//HTML Tasks
gulp.task('lint-html', ['minify-html']);
