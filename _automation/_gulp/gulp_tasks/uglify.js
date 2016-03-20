// Minify JavaScript with UglifyJS2
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');


gulp.task('uglify', function() {
	return gulp.src([
		paths.theme.js + '/bundle/*.js',
		'!' + paths.theme.js + '/bundle/*.min.js'
	])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.theme.js + '/bundle'));
});
