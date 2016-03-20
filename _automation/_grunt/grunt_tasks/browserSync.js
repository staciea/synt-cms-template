// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
	test:{
		options: {
			server: {
				baseDir: '<%= paths.theme.main %>'
			}
		}
	},
	dev:{
		bsFiles: {
			src: [
				'<%= paths.theme.js %>/*.min.js',
				'<%= paths.theme.css %>/*.min.css',
				'<%= paths.theme.images %>/**/*.*',
				'<%= paths.theme.html %>/*.html'
			]
		},
		options: {
			watchTask: true,
			server: {
				baseDir: '<%= paths.theme.main %>'
			}
		}
	}
}
