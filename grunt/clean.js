// Clear files and folders
module.exports = {
	gitkeep: ['<%= theme.main %>/**/.gitkeep', '<%= zip.main %>/**/.gitkeep'],
	dev: ['<%= theme.js %>/live.js'],
	build: ['<%= theme.js %>/**/*.min.*',
			'<%= theme.css %>/**/*.min.*',
			'<%= theme.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
