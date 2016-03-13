// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('../paths'),
	runSequence = require('run-sequence');


// Watch Files For Changes
gulp.task('watch:dev', function() {
	gulp.watch(
		paths.theme.coffee + '/main/*.coffee',
		function() {
			runSequence(
				'coffee:main:changed',
				'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.coffee + '/head/*.coffee',
		function() {
			runSequence(
			'coffee:head:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.coffee + '/vendor/*.coffee',
		function() {
			runSequence(
			'coffee:vendor:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.js + '/main/*.js',
		function() {
			runSequence(
			'concat:main:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.js + '/head/*.js',
		function() {
			runSequence(
			'concat:head:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.js + '/ie/*.js',
		function() {
			runSequence(
			'concat:ie:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.theme.js + '/vendor/*.js',
		function() {
			runSequence(
			'concat:vendor:changed',
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
