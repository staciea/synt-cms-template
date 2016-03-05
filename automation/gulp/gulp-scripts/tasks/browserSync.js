// Static server for theme dev
var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync', function() {
	browserSync.init({
		files: [
			paths.theme.js + '/*.js',
			paths.theme.css + '/*.css',
			paths.theme.images + '/**/*.*',
			paths.theme.html + '/*.html'
		],
		server: paths.theme.main
	});
});
