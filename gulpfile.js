/**
 * Astor Dashboard - Version 1.4.2
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
  return sass('dist/sass/dashboard-build.scss', {
        loadPath: './node_modules/bootstrap-sass/assets/stylesheets'
      })
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

// Select2 task
gulp.task('select2:build', function () {
    return sass('dist/sass/select2-build.scss', {
        loadPath: './bower_components/select2/src/scss'
    })
      .on('error', function (err) {console.error('Error!', err.message);})
      .pipe(concat('select2.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('select2', ['select2:build'], function () {
    gulp.watch('dist/sass/select2-build.scss', ['select2:build']);
});

// bootstrap-datetimepicker task
gulp.task('datetimepicker:build', function () {
    return sass('dist/sass/datetimepicker-build.scss', {
        loadPath: [
            './bower_components/eonasdan-bootstrap-datetimepicker/src/sass',
            './node_modules/bootstrap-sass/assets/stylesheets'
        ]
    })
      .on('error', function (err) {console.error('Error!', err.message);})
      .pipe(concat('datetimepicker.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('datetimepicker', ['datetimepicker:build'], function () {
    gulp.watch('dist/sass/datetimepicker-build.scss', ['datetimepicker:build']);
});

// boostrap-slider task
gulp.task('slider:build', function () {
    return sass('dist/sass/slider-build.scss', {
        loadPath: [
            './node_modules/bootstrap-sass/assets/stylesheets'
        ]
    })
      .on('error', function (err) {console.error('Error!', err.message);})
      .pipe(concat('slider.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('slider', ['slider:build'], function () {
    gulp.watch('dist/sass/slider-build.scss', ['slider:build']);
});

// Default task
gulp.task('default', gulpsync.sync(['dashboard:build', 'datatables:build', 'select2:build', 'datetimepicker:build', 'slider:build']));
