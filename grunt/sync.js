// Grunt.js task providing one-way synchronization of directories
module.exports = {
	livejs: {
		files: [{
			expand: true,
			cwd: '<%= theme.devtools %>/',
			src: 'live.js',
			dest: '<%= theme.js %>/'
		}]
	},
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= theme.helpers %>',
			src: ['**/*.*', '.htaccess'],
			dest: '<%= theme.main %>'
		}]
	}
}
