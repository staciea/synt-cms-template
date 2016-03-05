// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('../paths');


// Watch Files For Changes
gulp.task('watch:dev', function() {
	gulp.watch(paths.theme.coffee + '/main/*.coffee', ['coffee:main:server']);
	gulp.watch(paths.theme.coffee + '/head/*.coffee', ['coffee:head:server']);
	gulp.watch(paths.theme.coffee + '/vendor/*.coffee', ['coffee:vendor:server']);
	gulp.watch(paths.theme.js + '/main/*.js', ['concat:main:server']);
	gulp.watch(paths.theme.js + '/head/*.js', ['concat:head:server']);
	gulp.watch(paths.theme.js + '/ie/*.js', ['concat:ie:server']);
	gulp.watch(paths.theme.js + '/vendor/*.js', ['concat:vendor:server']);
	gulp.watch(paths.theme.sass + '/*.{sass,scss}', ['sass:server']);
	gulp.watch(paths.theme.stylus + '/*.styl', ['stylus:server']);
	gulp.watch(paths.theme.css + '/*.css', ['mmq']);
	gulp.watch(paths.theme.jade + '/*.jade', ['jade:server']);
	gulp.watch([
		paths.theme.helpers + '/**/*.*',
		paths.theme.helpers + '/.htaccess'
	], ['sync:helpers:server']);
});
