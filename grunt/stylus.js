// Compile Stylus files to CSS
module.exports = {
	main: {
		options: {
			linenos: false,
			compress: false
		},
		files: [{
			expand: true,
			cwd: '<%= theme.stylus %>',
			src: [ '*.styl' ],
			dest: '<%= theme.css %>',
			ext: '.css'
		}]
	}
}
