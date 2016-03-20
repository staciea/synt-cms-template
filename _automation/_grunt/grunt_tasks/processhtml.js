// Process html files at build time to modify them depending on the release environment
module.exports = {
	all: {
		files: [{
			expand: true,
			cwd: '<%= paths.theme.html %>',
			src: ['*.html'],
			dest: '<%= paths.theme.html %>',
			ext: '.html'
		}],
	}
}
