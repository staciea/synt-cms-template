// Concatenate files.
module.exports = {
	all: {
		files: [{
			'<%= paths.theme.js %>bundle/ie.js': '<%= paths.theme.js %>/ie.js',
			'<%= paths.theme.js %>bundle/body.js': '<%= paths.theme.js %>/body.js',
			'<%= paths.theme.js %>bundle/head.js': '<%= paths.theme.js %>/head.js'
		}]
	}
}
