// Format CSS coding style with CSScomb
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	csscomb = require('gulp-csscomb');


//Autoprefixer
gulp.task('csscomb', function () {
	return gulp.src(paths.theme.css + '/*.min.css')
		.pipe(plumber())
		.pipe(csscomb())
		.pipe(gulp.dest(paths.theme.css));
});
