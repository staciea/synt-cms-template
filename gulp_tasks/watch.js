// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('./config/paths'),
	runSequence = require('run-sequence');


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(
		[
			paths.dev.js + '/*.js',
			'!' + paths.dev.js + '/*.min.js',
			paths.dev.js + '/lib/*.js'
		],
		function() {
			runSequence(
			'rigger:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.sass + '/*.{sass,scss}',
		function() {
			runSequence(
			'sass:main:changed',
			'postcss:dev',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.data + '/*.*',
		function() {
			runSequence(
			'pug:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.dev.pug + '/*.pug',
			paths.dev.jade + '/*.jade'
		],
		function() {
			runSequence(
			'pug:main:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.dev.helpers + '/**/*.*',
			paths.dev.helpers + '/.htaccess'
		],
		function() {
			runSequence(
				'sync:helpers:changed',
				'browserSync:reload'
			);
		}
	);
});
