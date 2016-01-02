// Run tasks whenever watched files change
module.exports = {
	main: {
		files: [
			'<%= theme.sass %>/*.{sass,scss}',
			'<%= theme.stylus %>/*.styl',
			'<%= theme.coffee %>/**/*.coffee',
			'<%= theme.js %>/**/*.js',
			'<%= theme.jade %>/**/*.jade',
			'<%= theme.helpers %>/**/*.*',
			'<%= theme.helpers %>/.htaccess',
			'<%= theme.devtools %>/index.html'
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
			'newer:jade',
			'sync:intro',
			'sync:helpers'
		],
		options: {
			spawn: false
		}
	}
}
