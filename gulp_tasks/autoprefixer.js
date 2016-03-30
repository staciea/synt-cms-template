// Prefix CSS with Autoprefixer
var gulp = require('gulp'),
	paths = require('./config/paths'),
	settings = require('./config/settings'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer');


//Autoprefixer
gulp.task('autoprefixer', function () {
	return gulp.src(paths.theme.css + '/*.min.css')
		.pipe(plumber())
		.pipe(autoprefixer({
			browsers: settings.browserlist,
			cascade: true
		}))
		.pipe(gulp.dest(paths.theme.css));
});
