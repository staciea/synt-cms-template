// Compile Stylus with gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	stylus = require('gulp-stylus'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;


//Compile *.scss files
gulp.task('stylus', function () {
	return gulp.src(paths.theme.stylus + '/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest(paths.theme.css));
});

//Compile *.scss files within watch task
gulp.task('stylus:server', function () {
	return gulp.src(paths.theme.stylus + '/*.styl')
		.pipe(plumber())
		.pipe(changed(paths.theme.css, {extension: '.css'}))
		.pipe(stylus())
		.pipe(gulp.dest(paths.theme.css))
		.pipe(reload({ stream:true }));
});
