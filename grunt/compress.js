// Compress files and folders
module.exports = {
	theme: {
		options: {
		  archive: '<%= zip.theme %>'
		},
		expand: true,
		cwd: '<%= theme.main %>',
		src: ['**/*', '.htaccess']
	}
}
