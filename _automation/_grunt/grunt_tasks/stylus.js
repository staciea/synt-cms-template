// Compile Stylus files to CSS
module.exports = {
	all: {
		options: {
			linenos: false,
			compress: false
		},
		files: [{
			expand: true,
			cwd: '<%= paths.theme.stylus %>',
			src: [ '*.styl' ],
			dest: '<%= paths.theme.css %>',
			ext: '.css'
		}]
	}
}
