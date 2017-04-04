const
    gulp = require('gulp'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssNano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    minimizeIMG = require('gulp-imagemin');

gulp.task('build', [
    'cleanDist',
    'optimizeIMGs',
    'useminTrigger',
]);

gulp.task('cleanDist', function () {
    return del(['./docs']);
})

gulp.task('optimizeIMGs', ['cleanDist'], function () {
    return gulp.src('./app/img/*')
    .pipe(minimizeIMG({
        pregressive: true,
        interlaced: true,
        multipass: true,
    }))
    .pipe(gulp.dest('./docs/img'))
})

gulp.task('useminTrigger', ['cleanDist'], function () {
    gulp.start('optimizeStaticFiles');
})

gulp.task('optimizeStaticFiles', ['postCSS', 'transpileJs'], function () {
    return gulp.src(['./app/*.html'])
        .pipe(usemin({
            css: [
                () => { return rev() },
                () => { return cssNano() }
             ],
            js: [
                () => { return rev() },
                () => { return uglify() }
            ]
        }))
        .pipe(gulp.dest('./docs'))
})
