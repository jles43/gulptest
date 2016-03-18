'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
  console.log('default task started');
});

gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('js5'));
});
