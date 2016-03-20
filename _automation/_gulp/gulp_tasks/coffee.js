// Coffeescript plugin for gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	coffee = require('gulp-coffee');


//Compile main *.coffee files
gulp.task('coffee', function() {
	return gulp.src([paths.theme.coffee + '/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/lib'));
});

//Compile main *.coffee files within watch task
gulp.task('coffee:changed', function() {
	return gulp.src([paths.theme.coffee + '/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.theme.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/lib'));
});
