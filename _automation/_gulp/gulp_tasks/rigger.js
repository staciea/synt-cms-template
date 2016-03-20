// Streaming concat middleware for gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	rigger = require('gulp-rigger');


// Concatenate & Minify JS
gulp.task('rigger', function() {
	return gulp.src([paths.theme.js + '/*.js'])
		.pipe(plumber())
		.pipe(rigger())
		.pipe(gulp.dest(paths.theme.js + '/bundle'));
});

// Concatenate & Minify JS within watch task
gulp.task('rigger:changed', function() {
	return gulp.src([paths.theme.js + '/*.js'])
		.pipe(plumber())
		.pipe(rigger())
		.pipe(gulp.dest(paths.theme.js + '/bundle'));
});
