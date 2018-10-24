const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const gulpif = require('gulp-if')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify')

const env = require('../environment')

// Paths
const paths = require('../paths')
const path = paths.path

gulp.task('js', () => {
  return gulp
    .src([path.srcJS])
    .pipe(concat('app.js'))
    .pipe(gulpif(env.global === 'dev', sourcemaps.init()))
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(gulpif(env.global === 'prod', uglify()))
    .pipe(gulpif(env.global === 'dev', sourcemaps.write()))
    .pipe(gulp.dest(path.distJS))
    .pipe(gulpif(env.global === 'dev', browserSync.stream()))
})

gulp.task('vendor', () => {
  return gulp
    .src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/modernizr/bin/modernizr'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/scripts/vendor'))
})

gulp.task('scripts', gulp.series(gulp.parallel('js', 'vendor')))
