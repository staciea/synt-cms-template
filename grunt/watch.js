// Run tasks whenever watched files change
module.exports = {
	main: {
		files: ['<%= theme.sass %>/*.{sass,scss}',
				'<%= theme.stylus %>/*.styl',
				'<%= theme.coffee %>/*.coffee',
				'<%= theme.js %>/*.js',
				'<%= theme.jade %>/**/*.jade',
				'<%= theme.helpers %>/**/*.*',
				'<%= theme.helpers %>/.htaccess',
				'<%= theme.devtools %>/index.html'],
		tasks: ['dev'],
		options: {
			spawn: false
		}
	}
}
