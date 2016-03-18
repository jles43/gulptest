'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var packageJSON = require('./package');
var jshintConfig = packageJSON.jshintConfig;
jshintConfig.lookup = false;

var js5dir = 'js5', srcdir = 'src';
var paths = {
  src: srcdir+'/**/*.js',
  js5: js5dir+'/**/*.js',
  test: 'tests/**/test-*.js'
};

gulp.task('default', function() {
  console.log('default task started');
});

gulp.task('babel', ['lint'], function() {
  return gulp.src(paths.src)
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest(js5dir));
});

gulp.task('lint', function() {
  return gulp.src(paths.src)
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'));
});

gulp.task('test', ['babel'], function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha({}));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['babel']);
  gulp.watch(paths.js5, ['test']);
});
