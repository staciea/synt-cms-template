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
	intro: {
		files: [{
			expand: true,
			cwd: '<%= theme.devtools %>/',
			src: 'index.html',
			dest: '<%= theme.main %>/'
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
