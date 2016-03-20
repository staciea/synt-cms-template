//Minify images
module.exports = {
	all: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= paths.theme.images %>',
			src: ['**/*.*'],
			dest: '<%= paths.theme.images %>'
		}]
	}
}
