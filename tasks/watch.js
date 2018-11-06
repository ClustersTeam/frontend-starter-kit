const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const requireDir = require('require-dir')

const tasks = requireDir('./')

// Paths
const paths = require('../paths')
const path = paths.path

gulp.task('watch', () => {
  browserSync.init(['./dist/**/*'], {
    server: {
      baseDir: './dist'
    }
  })

  gulp
    .watch(path.src, gulp.parallel('styles', 'js', 'image:copy', 'criticalcss'))
    .on('change', function (event) {
      console.log(
        'File' + event.path + ' was ' + event.type + ', running tasks...'
      )
    })

  gulp.watch(
    ['./src/templates/**/*.hbs', './src/partials/**/*.hbs'],
    gulp.parallel('templates'),
    reload
  )
})
