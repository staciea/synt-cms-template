// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.theme.coffee %>',
		src: ['**/*.coffee'],
		dest: '<%= paths.theme.js %>',
		ext: '.js',
		extDot: 'last'
	}
}
