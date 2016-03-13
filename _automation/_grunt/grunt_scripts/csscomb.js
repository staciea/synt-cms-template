// The grunt plugin for sorting CSS properties in specific order.
module.exports = {
	options: {
	    config: './.csscomb.json'
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= theme.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= theme.css %>'
		}]
	}
}
