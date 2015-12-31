// Clear files and folders
module.exports = {
	gitkeep: ['<%= theme.main %>/**/.gitkeep'],
	build: ['<%= theme.js %>/**/*.min.*',
			'<%= theme.css %>/**/*.min.*',
			'<%= theme.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
