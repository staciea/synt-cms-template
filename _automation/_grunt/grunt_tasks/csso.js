// Minify CSS files with CSSO
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	all: {
		files:[{
			expand: true,
			cwd: '<%= paths.theme.css %>',
			src: ['*.min.css'],
			dest: '<%= paths.theme.css %>'
		}]
	}
}
