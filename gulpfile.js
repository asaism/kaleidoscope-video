// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass-watch', ['sass'], function() {
    var watcher_scss = gulp.watch('./scss/**/*.scss', ['sass']);
    watcher_scss.on('change', function(event) {
    });
});

gulp.task('default', ['sass-watch']);