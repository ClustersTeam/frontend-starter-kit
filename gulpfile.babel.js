const Fiber = require('fibers');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

const babel = require('gulp-babel');
const browserSync = require("browser-sync").create();

const input = './src/styles/**/*.scss';
const output = './dist/styles';
 
gulp.task('sass', function () {
	return gulp.src(input)
	.pipe(sourcemaps.init())
	.pipe(sass({fiber: Fiber}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(output))
	.pipe(browserSync.stream())
});

gulp.task('sass:prod', function () {
	return gulp.src(input)
	.pipe(sass({fiber: Fiber}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(cssnano())
	.pipe(gulp.dest(output))
});

gulp.task('build', gulp.series(gulp.parallel('sass:prod')));
  
gulp.task('default', gulp.series('build'), () => gulp.src('src/app.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))

	.pipe(gulp.dest('dist'))
);

gulp.task('watch', function() {
	browserSync.init({
        server: {
            baseDir: './'
        }
});
		
gulp.watch(input, gulp.parallel('sass'))
	.on('change', function(event){
		console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
	});
});
