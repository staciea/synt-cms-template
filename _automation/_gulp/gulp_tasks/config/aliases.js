// Include gulp
var gulp = require('gulp'),
	runSequence = require('run-sequence');

// Install bower dependencies and place them to dev folders
gulp.task('start', function() {
	runSequence(
		'shell:bower',
		'bower:ie',
		'bower:vendor',
		'clean:gitkeep'
	);
});

// Dev task with static server
gulp.task('dev', function() {
	runSequence(
		'coffee',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'autoprefixer',
		'cmq',
		'jade',
		'sync:helpers',
		'browserSync:server',
		'watch:dev'
	);
});

// Build task
gulp.task('build', function() {
	runSequence(
		'imagemin',
		'processhtml',
		'csscomb',
		'uglify',
		'csso',
		'browserSync:server'
	);
});

// Regenerate and build project by running all tasks
gulp.task('rebuild', function() {
	runSequence(
		'coffee',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'autoprefixer',
		'cmq',
		'jade',
		'sync:helpers',
		'imagemin',
		'processhtml',
		'csscomb',
		'uglify',
		'csso'
	);
});

// Run server for static theme
gulp.task('server', ['browserSync:server']);
