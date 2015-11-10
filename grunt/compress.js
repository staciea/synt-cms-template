// Compress files and folders
module.exports = {
	theme: {
		options: {
		  archive: '<%= zip.theme %>'
		},
		expand: true,
		cwd: '<%= theme.main %>',
		src: ['**/*']
	},
	dev: {
		options: {
		  archive: '<%= zip.dev %>'
		},
		files: [
			{src: ['<%=theme.coffee %>/**',
				   '<%=theme.js %>/**',
				   '<%=theme.jade %>/**',
				   '<%=theme.sass %>/**',
				   '<%=theme.stylus %>/**',
				   '<%=theme.css %>/**',
				   '<%=theme.img %>/**',
				   '<%=theme.html %>/*',
				   '<%=theme.fonts %>/**',
				   '<%=theme.helpers %>/**',
				   '<%=theme.devtools %>/**']},
			{src: ['grunt/**']},
			{flatten: true, src: ['./*', '.editorconfig', '.gitignore'], filter: 'isFile'}
		]
	}
}
