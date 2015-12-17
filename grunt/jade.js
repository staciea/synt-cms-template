// Compile Jade templates
module.exports = {
	main: {
		options: {
			client: false,
			pretty: true
		},
		files: [ {
			cwd: '<%= theme.jade %>',
			src: ['**/*.jade'],
			dest: '<%= theme.html %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
