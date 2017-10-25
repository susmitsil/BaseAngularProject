var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src('src/views/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('src/views/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('src/views/stylesheets/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);