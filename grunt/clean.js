// Clear files and folders
module.exports = {
	gitkeep: ['<%= theme.main %>/**/.gitkeep'],
	debug: ['<%= theme.js %>/**/*.js',
			'!<%= theme.js %>/**/*.min.*',
			'<%= theme.css %>/**/*.css',
			'!<%= theme.css %>/**/*.min.*'],
	build: ['<%= theme.js %>/**/*.min.*',
			'<%= theme.css %>/**/*.min.*',
			'<%= theme.main %>/**/*.*.{png,jpg,gif,svg,ico}'],
	bower: 'bower_components'
}
