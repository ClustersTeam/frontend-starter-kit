const gulp = require('gulp');
const requireDir = require('require-dir');

// Tasks path
const tasks = requireDir('./tasks');

// Tasks
gulp.task('sass', tasks.styles);
gulp.task('scripts', tasks.scripts);
gulp.task("test", tasks.tests);
gulp.task("clean", tasks.clean);
gulp.task("watch", tasks.watch);

gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'scripts')));
