// gulp
const gulp = require("gulp");

// load all plugins in "devDependencies" into the variable $
const $ = require("gulp-load-plugins")({
    pattern: ["*"],
    scope: ["devDependencies"]
});

const paths = require('../paths')
const path = paths.path

gulp.task('stylelint', () => {
  return gulp.src(path.srcSCSS).pipe(
    $.stylelint({
      reporters: [{ formatter: 'string', console: true }]
    })
  )
})

gulp.task('filesize', () => {
  return gulp.src(path.dist)
    .pipe($.size({ title: 'File size:', showFiles: true }))
    .pipe(gulp.dest('../dist'))
})

gulp.task('tests', gulp.series('filesize', 'stylelint'))
