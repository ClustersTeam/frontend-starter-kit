const Fiber = require('fibers');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const browserSync = require("browser-sync").create();
const del = require('del');
const size = require('gulp-size');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Paths
const paths = require('./paths');
const path = paths.path;

let getArg = (key) => {
	var index = process.argv.indexOf(key);
	var next = process.argv[index + 1];
	return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
}
  
global.env = getArg('--env') ? getArg('--env') : 'dev';
process.env.NODE_ENV = getArg('--env') === 'prod' ? 'production' : 'development';

// Tasks
gulp.task('sass', () => {
	return gulp.src(path.srcSCSS)
	.pipe(gulpif(global.env === 'dev', sourcemaps.init()))
	.pipe(sass({fiber: Fiber}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulpif(global.env === 'prod', cssnano()))
	.pipe(gulpif(global.env === 'dev', sourcemaps.write()))
	.pipe(gulp.dest(path.distCSS))
	.pipe(gulpif(global.env === 'dev', browserSync.stream()))
});

gulp.task('scripts', () => gulp.src([path.srcJS, '!scripts/vendors/*.js'])
	.pipe(concat('app.js'))
	.pipe(gulpif(global.env === 'dev', sourcemaps.init()))
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulpif(global.env === 'prod', uglify()))
	.pipe(gulpif(global.env === 'dev', sourcemaps.write()))
	.pipe(gulp.dest(path.distJS))
	.pipe(gulpif(global.env === 'dev', browserSync.stream()))
);

gulp.task('clean', (done) => {
	if(global.env === 'prod') {
		return del([path.dist], {force:true})
		.then(paths => {
			console.log('Deleted files and folders:\n', paths.join('\n'))
		});
	}

	return done();
});

gulp.task('watch', () => {
	browserSync.init({
        server: {
            baseDir: './'
        }
	});
			
	gulp.watch(path.src, gulp.parallel('sass', 'scripts'))
		.on('change', function(event){
			console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
		});
});

gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'scripts')));


// TODO
// eslint 
gulp.task('size', () => {
    return gulp.src('./dist/**/*')
        .pipe(size({title: 'File size:', showFiles: true}))
        .pipe(gulp.dest('./dist'));
});
  
gulp.task("test", gulp.series('size'));