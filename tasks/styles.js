const Fiber = require('fibers')
const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('gulp-cssnano')
const gulpif = require('gulp-if')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const critical = require('critical').stream;

const env = require('../environment')

// Paths
const paths = require('../paths')
const path = paths.path

gulp.task('styles', () => {
  return gulp
    .src(path.srcSCSS)
    .pipe(gulpif(env.global === 'dev', sourcemaps.init({loadMaps: true})))
    .pipe(sass({ fiber: Fiber }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(env.global === 'prod', cssnano()))
    .pipe(gulpif(env.global === 'dev', sourcemaps.write(
      {
        discardComments: {
            removeAll: true
        },
        discardDuplicates: true,
        discardEmpty: true,
        minifyFontValues: true,
        minifySelectors: true
    })))
    .pipe(gulp.dest(path.distCSS))
    .pipe(gulpif(env.global === 'dev', browserSync.stream()))
})

// Generate & Inline Critical-path CSS
gulp.task('criticalcss', () => {
    return gulp.src('dist/*.html')
        .pipe(critical({
            base: './dist/', 
            inline: true, 
            css: ['dist/styles/critical.css']
        }))
        .on('error', function(err) { 
            log.error(err.message); 
        })
        .pipe(gulp.dest('dist'));
});
