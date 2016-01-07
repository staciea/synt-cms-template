// Process html files at build time to modify them depending on the release environment
module.exports = {
	main: {
		files: [{
			expand: true,
			cwd: '<%= theme.html %>',
			src: ['*.html'],
			dest: '<%= theme.html %>',
			ext: '.html'
		}],
	}
}
