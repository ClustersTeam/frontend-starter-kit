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

const input = './src/styles/**/*.scss';
const output = './dist/styles';

//Gets argument after command
let getArg = (key) => {
	var index = process.argv.indexOf(key);
	var next = process.argv[index + 1];
	return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
}
  
global.env = getArg('--env') ? getArg('--env') : 'dev';
process.env.NODE_ENV = getArg('--env') === 'prod' ? 'production' : 'development';

gulp.task('sass', function () {
	return gulp.src(input)
	.pipe(gulpif(global.env === 'dev', sourcemaps.init()))
	.pipe(sass({fiber: Fiber}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulpif(global.env === 'prod', cssnano()))
	.pipe(gulpif(global.env === 'dev', sourcemaps.write()))
	.pipe(gulp.dest(output))
	.pipe(gulpif(global.env === 'dev', browserSync.stream()))
});

gulp.task('scripts', () => gulp.src('src/app.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulp.dest('dist'))
);

gulp.task('clean', (done) => {
	if(global.env === 'prod') {
		return del([`./dist/*`])
		.then(paths => {
			console.log('Deleted files and folders:\n', paths.join('\n'))
		});
	}

	return done();
});

  
gulp.task('default', gulp.series('clean', gulp.parallel('sass')));

gulp.task('watch', function() {
	browserSync.init({
        server: {
            baseDir: './'
        }
	});
			
	gulp.watch(input, gulp.parallel('sass', 'scripts'))
		.on('change', function(event){
			console.log('File' + event.path + ' was ' + event.type + ', running tasks...')
		});
});

// TODO: Test task (in separate file)
// - gulp size 
// - eslint 

gulp.task('test', function(done) {
	
	// Example
 	gulp.task('sass', function () {
		return gulp.src(input)
		.pipe(gulpif(global.env === 'dev', sourcemaps.init()))
		.pipe(sass({fiber: Fiber}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulpif(global.env === 'prod', cssnano()))
		.pipe(gulpif(global.env === 'dev', sourcemaps.write()))
		.pipe(gulp.dest(output))
		.pipe(gulpif(global.env === 'dev', browserSync.stream()))
	});

	done()
});
