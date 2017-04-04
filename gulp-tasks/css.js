const gulp        = require('gulp'),
      css         = require('gulp-postcss'),
      colors      = require('postcss-color-function'),
      imports     = require('postcss-import'),
      mixins      = require('postcss-mixins'),
      nesting     = require('postcss-nested'),
      math        = require('postcss-calc'),
      vars        = require('postcss-simple-vars');

gulp.task('postCSS', () => {
  return gulp.src('./src/css/styles.css')
  .pipe(css([imports, mixins, vars, nesting, math, colors]))
  .on('error', function (err) {
    console.error(err.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app'))
})

gulp.task('injectCSS', ['postCSS'], function () {
  return gulp.src('./app/styles.css')
  .pipe(browserSync.stream());
});
