// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
	test:{
		options: {
			server: {
				baseDir: '<%= theme.main %>'
			}
		}
	},
	dev:{
		bsFiles: {
			src: [
				'<%= theme.js %>/*.js',
				'<%= theme.css %>/*.css',
				'<%= theme.images %>/**/*.{png,jpg,gif,svg}',
				'<%= theme.html %>/**/*.html'
			]
		},
		options: {
			watchTask: true,
			server: {
				baseDir: '<%=theme.main %>'
			}
		}
	}
}
