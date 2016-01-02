// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= theme.coffee %>/main',
		src: ['*.coffee'],
		dest: '<%= theme.js %>/main',
		ext: '.js',
		extDot: 'last'
	},
	head: {
		expand: true,
		flatten: true,
		cwd: '<%= theme.coffee %>/head',
		src: ['*.coffee'],
		dest: '<%= theme.js %>/head',
		ext: '.js',
		extDot: 'last'
	},
	vendor: {
		expand: true,
		flatten: true,
		cwd: '<%= theme.coffee %>/vendor',
		src: ['*.coffee'],
		dest: '<%= theme.js %>/vendor',
		ext: '.js',
		extDot: 'last'
	}
}
