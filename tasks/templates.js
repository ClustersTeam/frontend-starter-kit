const fs = require('fs')
const gulp = require('gulp')
const handlebars = require('gulp-compile-handlebars')
const layouts = require('handlebars-layouts')
const rename = require('gulp-rename')
const replace = require('gulp-replace')

handlebars.Handlebars.registerHelper(layouts(handlebars.Handlebars))

gulp.task('templates', () => {
  const templateData = {},
    options = {
      ignorePartials: true,
      batch: ['./src/partials/'],
      helpers: {
        capitals: function (str) {
          return str.toUpperCase()
        }
      }
    }

  return gulp
    .src('./src/templates/**/*.hbs')
    .pipe(handlebars(templateData, options))
    .pipe(
      rename(function (path) {
        path.extname = '.html'
      })
    )
    .pipe(gulp.dest('dist'))
})

gulp.task('templates:optimized', gulp.series('templates'), () => {
  return gulp
    .src('./dist/**/*.html')
    .pipe(replace(/\.\.\//g, ''))
    .pipe(gulp.dest('./dist/'))
})
