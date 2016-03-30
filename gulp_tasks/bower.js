// Manage bower dependencies
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	mainBowerFiles = require('main-bower-files');


// Copy bower files into js vendor folder
gulp.task('bower', function() {
	return gulp.src(mainBowerFiles({
		overrides: {
			jquery: {
				main: "dist/jquery.js"
			},
			modernizr: {
				main: "modernizr.js"
			},
			html5shiv: {
				main: "dist/html5shiv.js"
			},
			respond: {
				main: "src/respond.js"
			}
		}
	}))
		.pipe(plumber())
		.pipe(gulp.dest(paths.theme.js + '/vendor'));
});
