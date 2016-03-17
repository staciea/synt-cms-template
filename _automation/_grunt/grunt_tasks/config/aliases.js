module.exports = {
	// Install bower dependencies and place them to dev folders
	'start': [
		'shell:bower',
		'bower:ie',
		'bower:vendor',
		'clean:gitkeep'
	],

	// Dev task with static server
	'dev': [
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
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
		'browserSync:dev',
		'watch:dev'
	],

	// Build task
	'build': [
		'imagemin',
		'processhtml',
		'csscomb',
		'uglify',
		'csso',
		'browserSync:test'
	],

	// Regenerate and build project by running all tasks
	'rebuild': [
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
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
	],

	// Run server without watching for changes
	'server': [
		'browserSync:test'
	]
};
