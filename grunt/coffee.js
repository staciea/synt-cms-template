// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= theme.coffee %>',
		src: ['*.coffee'],
		dest: '<%= theme.js %>',
		ext: '.js',
		extDot: 'last'
	}
}
