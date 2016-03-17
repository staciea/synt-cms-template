// Minify CSS files with CSSO
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= paths.theme.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= paths.theme.css %>',
			ext: '.min.css'
		}]
	}
}
