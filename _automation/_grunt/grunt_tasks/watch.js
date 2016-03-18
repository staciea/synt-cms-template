// Run tasks whenever watched files change
module.exports = {
	dev: {
		files: [
			'<%= paths.theme.coffee %>/**/*.coffee',
			'<%= paths.theme.js %>/main/*.js',
			'<%= paths.theme.js %>/head/*.js',
			'<%= paths.theme.js %>/ie/*.js',
			'<%= paths.theme.js %>/ie/*.js',
			'<%= paths.theme.sass %>/*.{sass,scss}',
			'<%= paths.theme.stylus %>/*.styl',
			'<%= paths.theme.jade %>/*.jade',
			'<%= paths.theme.helpers %>/**/*.*',
			'<%= paths.theme.helpers %>/.htaccess'
		],
		tasks: [
			'newer:coffee',
			'newer:concat:main',
			'newer:concat:head',
			'newer:concat:ie',
			'newer:concat:vendor',
			'newer:sass',
			'newer:stylus',
			'autoprefixer',
        	'cmq',
			'newer:jade',
			'sync:helpers'
		],
		options: {
			spawn: false
		}
	}
}
