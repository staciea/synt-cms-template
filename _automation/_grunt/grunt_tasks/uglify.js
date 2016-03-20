// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= paths.theme.js %>',
			src: ['*.min.js'],
			dest: '<%= paths.theme.js %>'
		}]
	}
}
