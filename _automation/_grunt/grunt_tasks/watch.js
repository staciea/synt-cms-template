// Run tasks whenever watched files change
module.exports = {
	dev: {
		files: [
			'<%= paths.theme.coffee %>/main/*.coffee',
			'<%= paths.theme.coffee %>/head/*.coffee',
			'<%= paths.theme.coffee %>/vendor/*.coffee',
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
			'newer:coffee:main',
			'newer:coffee:head',
			'newer:coffee:vendor',
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
