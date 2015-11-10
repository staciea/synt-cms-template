// Concatenate files.
module.exports = {
	main: {
		files: [{
			src: ['<%= theme.js %>/*.js', '!<%= theme.js %>/assembled.js'],
			dest: '<%= theme.js %>/assembled.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= theme.js %>/head/*.js', '!<%= theme.js %>/head/head.js'],
			dest: '<%= theme.js %>/head/head.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= theme.js %>/ie/*.js', '!<%= theme.js %>/ie/ie.js'],
			dest: '<%= theme.js %>/ie/ie.js'
		}]
	},
	vendor: {
		files: [{
			src: ['<%= theme.js %>/vendor/*.js', '!<%= theme.js %>/vendor/vendor.js'],
			dest: '<%= theme.js %>/vendor/vendor.js'
		}]
	}
}
