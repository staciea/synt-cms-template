// Concatenate files.
module.exports = {
	main: {
		files: [{
			src: ['<%= paths.theme.js %>/main/*.js'],
			dest: '<%= paths.theme.js %>/main.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= paths.theme.js %>/head/*.js'],
			dest: '<%= paths.theme.js %>/head.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= paths.theme.js %>/ie/*.js'],
			dest: '<%= paths.theme.js %>/ie.js'
		}]
	},
	vendor: {
		files: [{
			src: ['<%= paths.theme.js %>/vendor/*.js'],
			dest: '<%= paths.theme.js %>/vendor.js'
		}]
	}
}
