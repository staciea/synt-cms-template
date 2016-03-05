// Compile Jade templates with gulp build tool
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	jade = require('gulp-jade'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;


//Compile *.jade files
gulp.task('jade', function() {
	return gulp.src(paths.theme.jade + '/*.jade')
		.pipe(plumber())
		.pipe(jade({
			client: false,
			pretty: true
		}).on('error', function(err) {
			console.log(err);
		}))
		.pipe(gulp.dest(paths.theme.html));
});

//Compile *.jade files within watch task
gulp.task('jade:server', function() {
	return gulp.src(paths.theme.jade + '/*.jade')
		.pipe(plumber())
		.pipe(changed(paths.theme.html, {extension: '.html'}))
		.pipe(jade({
			client: false,
			pretty: true
		}).on('error', function(err) {
			console.log(err);
		}))
		.pipe(gulp.dest(paths.theme.html))
		.pipe(reload({ stream:true }));
});
