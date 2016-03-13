//Minify images
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= theme.images %>',
			src: ['**/*.*'],
			dest: '<%= theme.images %>'
		}]
	}
}
