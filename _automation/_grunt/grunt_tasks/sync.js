// Grunt.js task providing one-way synchronization of directories
module.exports = {
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= paths.theme.helpers %>',
			src: ['**/*.*', '.htaccess'],
			dest: '<%= paths.theme.main %>'
		}]
	}
}
