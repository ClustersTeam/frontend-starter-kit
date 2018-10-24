const gulp = require('gulp');
const size = require('gulp-size');

const paths = require('../paths');
const path = paths.path;

module.exports = function () {
    return gulp.src(path.dist)
        .pipe(size({title: 'File size:', showFiles: true}))
        .pipe(gulp.dest('../dist'));
};