// Coffeescript plugin for gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	coffee = require('gulp-coffee');


//Compile main *.coffee files
gulp.task('coffee:main', function() {
	return gulp.src([paths.theme.coffee + '/main/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/main'));
});

//Compile head *.coffee files
gulp.task('coffee:head', function() {
	return gulp.src([paths.theme.coffee + '/head/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/head'));
});

//Compile vendor *.coffee files
gulp.task('coffee:vendor', function() {
	return gulp.src([paths.theme.coffee + '/vendor/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/vendor'));
});

//Compile main *.coffee files within watch task
gulp.task('coffee:main:changed', function() {
	return gulp.src([paths.theme.coffee + '/main/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.theme.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/main'));
});

//Compile head *.coffee files within watch task
gulp.task('coffee:head:changed', function() {
	return gulp.src([paths.theme.coffee + '/head/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.theme.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/head'));
});

//Compile vendor *.coffee files within watch task
gulp.task('coffee:vendor:changed', function() {
	return gulp.src([paths.theme.coffee + '/vendor/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.theme.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.theme.js + '/vendor'));
});