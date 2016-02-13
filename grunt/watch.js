// Run tasks whenever watched files change
module.exports = {
	dev: {
		files: [
			'<%= theme.coffee %>/main/*.coffee',
			'<%= theme.coffee %>/head/*.coffee',
			'<%= theme.coffee %>/vendor/*.coffee',
			'<%= theme.js %>/main/*.js',
			'<%= theme.js %>/head/*.js',
			'<%= theme.js %>/ie/*.js',
			'<%= theme.js %>/ie/*.js',
			'<%= theme.sass %>/*.{sass,scss}',
			'<%= theme.stylus %>/*.styl',
			'<%= theme.jade %>/*.jade',
			'<%= theme.helpers %>/**/*.*',
			'<%= theme.helpers %>/.htaccess'
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
			'sync:helpers'
		],
		options: {
			spawn: false
		}
	}
}
