const gulp        = require('gulp'),
      watch       = require('gulp-watch'),
      browserSync = require('browser-sync').create(),
      fallback    = require('connect-history-api-fallback'),
      log         = require('connect-logger');

gulp.task('default', ['transpileJs', 'postCSS'], () => {
  browserSync.init({
    notify: false,
    // injectChanges: false, // workaround for Angular 2 styleUrls loading
    files: ['./**/*.{html,htm,js}'],
    watchOptions: {
      ignored: 'node_modules'
    },
    server: {
      baseDir: './app',
      middleware: [
        log({ format: '%date %status %method %url' }),
        fallback({
          index: '/index.html',
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
        })
      ]
    }
  })

  watch('./src/css/**/*.css', () => gulp.start('injectCSS'))
  watch('./src/**/*.{js,jsx}', () => gulp.start('transpileJs'))
})

gulp.task('production-view', () => {
    browserSync.init({
        server: {
            baseDir: './docs',
            middleware: [
                log({ format: '%date %status %method %url' }),
                fallback({
                    index: '/index.html',
                    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
                })
            ]
        }
    })
})
