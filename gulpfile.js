const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglyfly');

gulp.task('minifycss', () => {
  return gulp
    .src('./src/styles/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('minifyjs', () => {
  return gulp
    .src('src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('default', ['minifycss', 'minifyjs']);
