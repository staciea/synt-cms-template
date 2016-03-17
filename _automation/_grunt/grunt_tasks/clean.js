// Clear files and folders
module.exports = {
	gitkeep: ['<%= paths.theme.main %>/**/.gitkeep'],
	cache: [
		'<%= paths.theme.js %>/*.min.*.js',
		'<%= paths.theme.css %>/*.min.*.css',
		'<%= paths.theme.fonts %>/**/*.*.{eot,svg,ttf,otf,woff,woff2}',
		'<%= paths.theme.main %>/**/*.*.{png,jpg,gif,svg,ico}'
	]
}
