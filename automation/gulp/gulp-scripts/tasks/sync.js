// Copy assets
var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;


// Copy some helpers and devtools.
// Credits to @jbdemonte https://github.com/gulpjs/gulp/issues/151
gulp.task('sync:helpers', function() {
	return gulp.src([
		paths.theme.helpers + '/**/',
		paths.theme.helpers + '/.htaccess'
	], {base: paths.theme.helpers})
		.pipe(gulp.dest(paths.theme.main));
});

// Copy some helpers and devtools within watch task
gulp.task('sync:helpers:server', function() {
	gulp.src([
		paths.theme.helpers + '/**/',
		paths.theme.helpers + '/.htaccess'
	], {base: paths.theme.helpers})
		.pipe(gulp.dest(paths.theme.main))
		.pipe(reload({ stream:true }));
});
