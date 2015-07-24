var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

gulp.task('dashmin', function() {
  return sass('dist/sass/dashmin-build.scss')
      .on('error', function (err) {console.error('Error!', err.message);})
      .pipe(concat('dashmin.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['dashmin'], function () {
    gulp.watch('dist/sass/**/*.scss', ['dashmin']);
});
