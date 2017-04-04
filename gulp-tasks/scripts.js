const gulp        = require('gulp'),
      webpack     = require('webpack');

gulp.task('transpileJs', () => {
  webpack(require('../webpack.config.js'), function (err, stats) {
  if (err) {
    console.log(err.toString());
  } else
    console.log('Script Packing Done...\n');
    console.log(stats.toString());
  })
})

gulp.task('refreshJs', ['transpileJs'], () => browserSync.reload())
