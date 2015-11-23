// Cache bust static assets using content hashing
module.exports = {
	options: {
		encoding: 'utf8',
		algorithm: 'md5',
		length: 16,
		// ignorePatterns: ['icons'],
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
			cwd: '<%= theme.html %>',
			baseDir: '<%= theme.html %>',
			src: ['*.html']
		}]

	},
	styles: {
		files: [{
			expand: true,
			cwd: '<%= theme.css %>',
			baseDir: '<%= theme.css %>',
			src: ['*.css']
		}]

	}
}
