//Minify images
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= theme.images %>',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: '<%= theme.images %>'
		}]
	}
}
