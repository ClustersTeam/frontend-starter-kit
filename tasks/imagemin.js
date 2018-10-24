const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const paths = require('../paths')
const path = paths.path
const gulpif = require('gulp-if')
const env = require('../environment')

gulp.task('image:copy', () => {
  return gulp.src(path.srcImages).pipe(gulp.dest(path.distImages))
})

gulp.task('imagemin', () => {
  return gulp
    .src(path.srcImages)
    .pipe(
      gulpif(
        env.global === 'prod',
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
          })
        ])
      )
    )
    .pipe(gulp.dest(path.distImages))
})
