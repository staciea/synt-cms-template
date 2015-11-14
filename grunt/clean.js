// Clear files and folders
module.exports = {
	gitkeep: ['<%= theme.main %>/**/.gitkeep'],
	build: ['<%= theme.js %>/**/*.min.*',
			'<%= theme.css %>/**/*.min.*',
			'<%= build.main %>/**/*.*.{png,jpg,gif,svg,ico}''<%= theme.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
