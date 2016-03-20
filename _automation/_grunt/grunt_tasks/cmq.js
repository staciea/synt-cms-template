// Combine matching media queries into one media query definition
module.exports = {
	options: {
		log: false
	},
	all: {
		files:[{
			expand: true,
			cwd: '<%= paths.theme.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= paths.theme.css %>'
		}]
	}
}
