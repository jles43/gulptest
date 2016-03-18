'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');

var packageJSON = require('./package');
var jshintConfig = packageJSON.jshintConfig;
jshintConfig.lookup = false;

gulp.task('default', function() {
  console.log('default task started');
});

gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('js5'));
});

var lintsrc = 'src';
gulp.task('lint', function() {
  return gulp.src(lintsrc+'/**/*.js')
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'));
});
