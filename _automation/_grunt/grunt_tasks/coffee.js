// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.theme.coffee %>/main',
		src: ['*.coffee'],
		dest: '<%= paths.theme.js %>/main',
		ext: '.js',
		extDot: 'last'
	},
	head: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.theme.coffee %>/head',
		src: ['*.coffee'],
		dest: '<%= paths.theme.js %>/head',
		ext: '.js',
		extDot: 'last'
	},
	vendor: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.theme.coffee %>/vendor',
		src: ['*.coffee'],
		dest: '<%= paths.theme.js %>/vendor',
		ext: '.js',
		extDot: 'last'
	}
}
