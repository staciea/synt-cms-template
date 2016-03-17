// Cache bust static assets using content hashing
module.exports = {
	options: {
		encoding: 'utf8',
		algorithm: 'md5',
		length: 16,
		ignorePatterns: ['favicon.ico'],
		// deleteOriginals: true,
		rename: true,
		filters: [{
			// 'img':
			// function() {
			// 	return this.attribs['data-src'];
			// }
		}]
	},
	markup: {
		files: [{
			expand: true,
			cwd: '<%= paths.theme.html %>',
			baseDir: '<%= paths.theme.html %>',
			src: ['*.html']
		}]
	},
	styles: {
		files: [{
			expand: true,
			cwd: '<%= paths.theme.css %>',
			baseDir: '<%= paths.theme.css %>',
			src: ['*.css']
		}]

	}
}
