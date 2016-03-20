// Concatenate files.
module.exports = {
	all: {
		files: [{
			'<%= paths.theme.js %>/ie.min.js': '<%= paths.theme.js %>/ie.js',
			'<%= paths.theme.js %>/body.min.js': '<%= paths.theme.js %>/body.js',
			'<%= paths.theme.js %>/head.min.js': '<%= paths.theme.js %>/head.js'
		}]
	}
}
