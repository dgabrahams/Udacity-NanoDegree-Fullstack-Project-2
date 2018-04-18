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

var htmlMinify = require('html-minifier').minify;


var paths = {
  src : {
    root: './src',
    js: './src/js/*.js',
    scss: './src/scss/*.scss',
    scssPartials: './src/scss/partials/*.scss'
  },
  dist: {
    root: './dist',
    js: './dist/*.js',
    minified: './dist/minified',
    //unminified: './dist/unminified',
    css: './dist/*.css',
    clean: './dist/*',
  }
};

// Remove all generated files.
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
    .pipe(concat('HCON-Script.js'))
    //.pipe(gulp.dest(paths.dist.unminified))
    .pipe(rename('HCON-Script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.minified));
});

// SCSS Tasks
gulp.task('sass', function () {
  return gulp.src([paths.src.scss,paths.src.scssPartials])
    .pipe(sass().on('error', sass.logError))
    //.pipe(gulp.dest(paths.dist.unminified))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.dist.minified));
});

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
    //.pipe(gulp.dest(paths.dist.unminified))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // .pipe(gulp.dest(paths.dist.root));
    .pipe(gulp.dest(paths.dist.minified));
});

// Watch Tasks
gulp.task('watch', function() {
  gulp.watch([paths.src.scss,paths.src.scssPartials], ['sass-lint', 'sass']);
  gulp.watch(paths.src.js, ['js-lint', 'js-uglify']);
});

//Default Tasks
gulp.task('default', ['watch', 'clean']);

//Lint Tasks
gulp.task('lint', ['js-lint', 'sass-lint']);
