/**
 * Astor Dashboard - Version 1.0.0
 * A responsive dashboard made with Sass
 * Copyright Emmanuel Antico 2015
 * Released under the MIT License
 *
 * File: gulpfile.js
 * Author: @emaphp
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var gulpsync = require('gulp-sync')(gulp);

// Dashboard task
gulp.task('dashboard:build', function() {
  return sass('dist/sass/dashboard-build.scss')
      .on('error', function (err) {console.error('Error!', err.message);})
      .pipe(concat('dashboard.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('dashboard', ['dashboard:build'], function () {
    gulp.watch(['dist/sass/dashboard-build.scss', 'dist/sass/dashboard/**/*.scss'], ['dashboard:build']);
});

// Datatables task
gulp.task('datatables:build', function () {
    return sass('dist/sass/datatables-build.scss', {
        loadPath: './bower_components/astor-datatables/dist/sass'
    })
      .on('error', function (err) {console.error('Error!', err.message);})
      .pipe(concat('datatables.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('datatables', ['datatables:build'], function () {
    gulp.watch('dist/sass/datatables-build.scss', ['datatables:build']);
});

// Default task
gulp.task('default', gulpsync.sync(['dashboard:build', 'datatables:build']));
