// Run tasks whenever watched files change
module.exports = {
	main: {
		files: ['<%= theme.html %>/*.html',
				'<%= theme.sass %>/*.sass',
				'<%= theme.stylus %>/*.styl',
				'<%= theme.css %>/*.css',
				'<%= theme.coffee %>/**/*.coffee',
				'<%= theme.js %>/**/*.js',
				'<%= theme.img %>/**/*.{png,jpg,gif}',
				'<%= theme.jade %>/pages/**/*.jade',
				'<%= theme.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'],
		tasks: ['default'],
		options: {
			spawn: false,
		},
	}
}