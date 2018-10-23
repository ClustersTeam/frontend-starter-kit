const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const requireDir = require('require-dir');

const tasks = requireDir('./');

// Paths
const paths = require('../paths');
const path = paths.path;

gulp.task('sass', tasks.styles);
gulp.task('scripts', tasks.scripts);

module.exports = function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
	});
			
	gulp.watch(path.src, gulp.parallel('sass', 'scripts'))
		.on('change', function(event){
			console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
		});
};