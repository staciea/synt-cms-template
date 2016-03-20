// Compile Sass to CSS
module.exports = {
	all: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= paths.theme.sass %>',
			src: [ '*.{sass,scss}' ],
			dest: '<%= paths.theme.css %>',
			ext: '.min.css'
		}]
	}
}
