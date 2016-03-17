// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= paths.theme.js %>',
			src: ['*.js', '!*.min.js'],
			dest: '<%= paths.theme.js %>',
			ext: '.min.js'
		}]
	}
}
