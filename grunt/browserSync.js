// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
	main:{
		bsFiles: {
			src: '<%= server.files %>/**/*.*'
		},
		options: {
			server: {
				baseDir: '<%= server.main %>'
			}
		}
	},
	dev:{
		bsFiles: {
			src: [
				'<%= server.js %>/*.js',
				'<%= server.css %>/*.css',
				'<%= server.html %>/**/*.html'
			]
		},
		options: {
			watchTask: true,
			server: {
				baseDir: '<%= server.main %>'
			}
		}
	}
}
