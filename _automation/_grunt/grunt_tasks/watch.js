// Run tasks whenever watched files change
module.exports = {
	all: {
		files: [
			'<%= paths.theme.coffee %>/*.coffee',
			'<%= paths.theme.js %>/*.js',
			'<%= paths.theme.sass %>/*.{sass,scss}',
			'<%= paths.theme.stylus %>/*.styl',
			'<%= paths.theme.jade %>/*.jade',
			'<%= paths.theme.helpers %>/**/*.*',
			'<%= paths.theme.helpers %>/.htaccess'
		],
		tasks: [
			'newer:coffee',
			'newer:rigger',
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
