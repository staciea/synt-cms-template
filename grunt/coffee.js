// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= theme.coffee %>',
		src: ['**/*.coffee', '!components/**/*.*'],
		dest: '<%= theme.js %>',
		ext: '.js',
		extDot: 'last'
	}
}
