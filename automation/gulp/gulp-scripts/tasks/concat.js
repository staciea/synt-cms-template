// Streaming concat middleware for gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;


// Concatenate & Minify JS
gulp.task('concat:main', function() {
	return gulp.src([paths.theme.js + '/main/*.js'])
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.theme.js));
});

gulp.task('concat:head', function() {
	return gulp.src([paths.theme.js + '/head/*.js'])
		.pipe(plumber())
		.pipe(concat('head.js'))
		.pipe(gulp.dest(paths.theme.js));
});

gulp.task('concat:ie', function() {
	return gulp.src([paths.theme.js + '/ie/*.js'])
		.pipe(plumber())
		.pipe(concat('ie.js'))
		.pipe(gulp.dest(paths.theme.js));
});

gulp.task('concat:vendor', function() {
	return gulp.src([paths.theme.js + '/vendor/*.js'])
		.pipe(plumber())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(paths.theme.js));
});

// Concatenate & Minify JS within watch task
gulp.task('concat:main:server', function() {
	return gulp.src([paths.theme.js + '/main/*.js'])
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.theme.js))
		.pipe(reload({ stream:true }));
});

gulp.task('concat:head:server', function() {
	return gulp.src([paths.theme.js + '/head/*.js'])
		.pipe(plumber())
		.pipe(concat('head.js'))
		.pipe(gulp.dest(paths.theme.js))
		.pipe(reload({ stream:true }));
});

gulp.task('concat:ie:server', function() {
	return gulp.src([paths.theme.js + '/ie/*.js'])
		.pipe(plumber())
		.pipe(concat('ie.js'))
		.pipe(gulp.dest(paths.theme.js))
		.pipe(reload({ stream:true }));
});

gulp.task('concat:vendor:server', function() {
	return gulp.src([paths.theme.js + '/vendor/*.js'])
		.pipe(plumber())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(paths.theme.js))
		.pipe(reload({ stream:true }));
});
