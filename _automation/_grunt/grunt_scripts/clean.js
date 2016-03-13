// Clear files and folders
module.exports = {
	gitkeep: ['<%= theme.main %>/**/.gitkeep'],
	cache: [
		'<%= theme.js %>/*.min.*.js',
		'<%= theme.css %>/*.min.*.css',
		'<%= theme.fonts %>/**/*.*.{eot,svg,ttf,otf,woff,woff2}',
		'<%= theme.main %>/**/*.*.{png,jpg,gif,svg,ico}'
	]
}
