module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			theme: {
				main: 'theme',
				coffee: '<%= theme.main %>/static/coffee',
				js: '<%= theme.main %>/static/js',
				jade: '<%= theme.main %>/static/jade/pages',
				sass: '<%= theme.main %>/static/sass',
				stylus: '<%= theme.main %>/static/stylus',
				css: '<%= theme.main %>/static/css',
				images: '<%= theme.main %>/static/images',
				fonts: '<%= theme.main %>/static/fonts',
				helpers: '<%= theme.main %>/static/helpers',
				devtools: '<%= theme.main %>/static/devtools',
				mockup: '<%= theme.main %>/static/mockup'
				html: '<%= theme.main %>'
			},
			// Zip result
			zip: {
				main: 'zip',
				theme: '<%= zip.main %>/theme.zip',
				dev: '<%= zip.main %>/dev.zip'
			},
			server: {
				main: 'theme',
				files: '<%= server.main %>'
			}
		},
		loadGruntTasks: {
			pattern: ['grunt-*', 'main-*'],
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
