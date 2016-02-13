// Grunt.js task providing one-way synchronization of directories
module.exports = {
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= theme.helpers %>',
			src: ['**/*.*', '.htaccess'],
			dest: '<%= theme.main %>'
		}]
	}
}
