const gulp = require('gulp')
const requireDir = require('require-dir')

// Tasks path
const tasks = requireDir('./tasks')

gulp.task('dev', gulp.series(gulp.parallel('styles', 'js', 'image:copy')))

gulp.task(
  'default',
  gulp.series(
    'clean',
    gulp.parallel('styles', 'scripts', 'imagemin', 'templates')
  )
)
