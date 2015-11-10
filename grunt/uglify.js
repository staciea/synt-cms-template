// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= theme.js %>/',
			src: ['**/*.js', '!**/*.min.js', '!live.js'],
			dest: '<%= theme.js %>/',
			ext: '.min.js'
		}]
	}
}
