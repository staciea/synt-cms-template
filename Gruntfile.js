module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Theme paths
			theme: {
				main: 'theme',
				coffee: '<%= theme.main %>/static/coffee',
				js: '<%= theme.main %>/static/js',
				jade: '<%= theme.main %>/static/jade/pages',
				sass: '<%= theme.main %>/static/sass',
				stylus: '<%= theme.main %>/static/stylus',
				css: '<%= theme.main %>/static/css',
				images: '<%= theme.main %>/static/images',
				helpers: '<%= theme.main %>/static/helpers',
				devtools: '<%= theme.main %>/static/devtools',
				html: '<%= theme.main %>'
			},
			// By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
			browserlist: [
				'> 1%',
				'last 20 versions',
				'Opera 12.1',
				'Explorer > 7',
				'Safari >= 5'
			]
		},
		loadGruntTasks: {
			pattern: ['grunt-*', 'main-*'],
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
