var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

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
gulp.task('default', ['dashboard:build', 'datatables:build']);
