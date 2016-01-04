// Clear files and folders
module.exports = {
	gitkeep: ['<%= theme.main %>/**/.gitkeep'],
	cache: ['<%= theme.js %>/*.min.*.js',
			'<%= theme.css %>/*.min.*.css',
			'<%= theme.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
