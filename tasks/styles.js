const Fiber = require('fibers')
const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('gulp-cssnano')
const gulpif = require('gulp-if')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')

const env = require('../environment')

// Paths
const paths = require('../paths')
const path = paths.path

gulp.task('styles', () => {
  return gulp
    .src(path.srcSCSS)
    .pipe(gulpif(env.global === 'dev', sourcemaps.init()))
    .pipe(sass({ fiber: Fiber }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(env.global === 'prod', cssnano()))
    .pipe(gulpif(env.global === 'dev', sourcemaps.write()))
    .pipe(gulp.dest(path.distCSS))
    .pipe(gulpif(env.global === 'dev', browserSync.stream()))
})
