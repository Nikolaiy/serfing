const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

    function styles() {
        return gulp.src('./scss/**/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
    }

    function watch() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });

        gulp.watch('./scss/**/*.sass', styles);
        gulp.watch('./*.html', browserSync.reload);
    }
   

    gulp.task('styles', styles);
    gulp.task('watch', watch);
    gulp.task('dev', gulp.series('styles', 'watch'));