// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('./config/paths'),
	runSequence = require('run-sequence');


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(
		paths.theme.coffee + '/*.coffee',
		function() {
			runSequence(
				'coffee:changed',
				'rigger',
				'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.theme.js + '/*.js',
			'!' + paths.theme.js + '/*.min.js',
			paths.theme.js + '/lib/*.js'
		],
		function() {
			runSequence(
			'rigger',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.sass + '/*.{sass,scss}',
		function() {
			runSequence(
			'sass:changed',
			'autoprefixer',
			'cmq',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.stylus + '/*.styl',
		function() {
			runSequence(
			'stylus:changed',
			'autoprefixer',
			'cmq',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.data + '/*.*',
		function() {
			runSequence(
			'jade',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.jade + '/*.jade',
		function() {
			runSequence(
			'jade:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.theme.helpers + '/**/*.*',
			paths.theme.helpers + '/.htaccess'
		],
		function() {
			runSequence(
				'sync:helpers:changed',
				'browserSync:reload'
			);
		}
	);
});
