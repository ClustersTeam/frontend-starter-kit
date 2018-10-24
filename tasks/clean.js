const gulp = require('gulp')
const del = require('del')
const paths = require('../paths')
const path = paths.path
const env = require('../environment')

gulp.task('clean', done => {
  if (env.global === 'prod') {
    return del([path.dist], { force: true }).then(paths => {
      console.log('Deleted files and folders:\n', paths.join('\n'))
    })
  }

  return done()
})
