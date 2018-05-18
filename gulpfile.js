<<<<<<< HEAD
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
||||||| merged common ancestors
=======
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglyfly');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');

// gulp.task('html', () => {
//   return gulp
//     .src('./src/*.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest('./dist/'));
// });

gulp.task('css', () => {
  return gulp
    .src('./src/styles/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('js', () => {
  return gulp
    .src('src/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('img', () => {
  return gulp
    .src('src/images/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['css', 'js', 'img']);
>>>>>>> 2427f1a2df8e3727e0a16db79ea8aa2a7b5da005
