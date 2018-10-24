const gulp = require('gulp')
const requireDir = require('require-dir')

// Tasks path
const tasks = requireDir('./tasks')

gulp.task('default', gulp.series('clean', gulp.parallel('styles', 'scripts')))
