// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files: [{
			src: ['<%= theme.js %>/assembled.js'],
			dest: '<%= theme.js %>/assembled.min.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= theme.js %>/head/head.js'],
			dest: '<%= theme.js %>/head/head.min.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= theme.js %>/ie/ie.js'],
			dest: '<%= theme.js %>/ie/ie.min.js'
		}]
	},
	vendor: {
		files: [{
			src: ['<%= theme.js %>/vendor/vendor.js'],
			dest: '<%= theme.js %>/vendor/vendor.min.js'
		}]
	}
}
