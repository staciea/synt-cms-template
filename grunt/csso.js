// Minify CSS files with CSSO
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= theme.css %>/',
			src: ['*.css', '!*.min.css'],
			dest: '<%= theme.css %>/',
			ext: '.min.css'
		}]
	}
}
