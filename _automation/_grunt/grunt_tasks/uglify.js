// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= paths.theme.js/bundle %>',
			src: ['*.js', '!*.min.js'],
			dest: '<%= paths.theme.js/bundle %>',
			ext: '.min.js'
		}]
	}
}
