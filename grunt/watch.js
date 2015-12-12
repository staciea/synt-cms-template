// Run tasks whenever watched files change
module.exports = {
	main: {
		files: ['<%= theme.html %>/*.html',
				'<%= theme.sass %>/*.{sass, scss}',
				'<%= theme.stylus %>/*.styl',
				'<%= theme.css %>/*.css',
				'<%= theme.coffee %>/*.coffee',
				'<%= theme.js %>/*.js',
				'<%= theme.jade %>/pages/*.jade',
				'<%= theme.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'],
		tasks: ['dev'],
		options: {
			spawn: false,
		},
	}
}
