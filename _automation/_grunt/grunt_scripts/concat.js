// Concatenate files.
module.exports = {
	main: {
		files: [{
			src: ['<%= theme.js %>/main/*.js'],
			dest: '<%= theme.js %>/main.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= theme.js %>/head/*.js'],
			dest: '<%= theme.js %>/head.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= theme.js %>/ie/*.js'],
			dest: '<%= theme.js %>/ie.js'
		}]
	},
	vendor: {
		files: [{
			src: ['<%= theme.js %>/vendor/*.js'],
			dest: '<%= theme.js %>/vendor.js'
		}]
	}
}
