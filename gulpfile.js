const gulp = require('gulp');
const saas = require('gulp-sass');
const browserSync = require('browser-sync');

function style () {
    return gulp.src('./scss/**/*.scss')
        .pipe(saas())
        .pipe(gulp.dest('./css'))
}

exports.style = style;