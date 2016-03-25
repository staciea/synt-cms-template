// Run tasks whenever watched files change
module.exports = {
	coffee: {
		files: [
			'<%= paths.theme.coffee %>/*.coffee'
		],
		tasks: [
			'newer:coffee',
			'rigger'
		],
		options: {
			spawn: false
		}
	},
	js: {
		files: [
			'<%= paths.theme.js %>/*.js',
			'<%= paths.theme.js %>/lib/*.js'
		],
		tasks: [
			'rigger'
		],
		options: {
			spawn: false
		}
	},
	sass: {
		files: [
			'<%= paths.theme.sass %>/*.{sass,scss}'
		],
		tasks: [
			'newer:sass',
			'autoprefixer',
        	'cmq'
		],
		options: {
			spawn: false
		}
	},
	stylus: {
		files: [
			'<%= paths.theme.stylus %>/*.styl'
		],
		tasks: [
			'newer:stylus',
			'autoprefixer',
        	'cmq'
		],
		options: {
			spawn: false
		}
	},
	data: {
		files: [
			'<%= paths.theme.data %>/*.*'
		],
		tasks: [
			'async_jade_data',
			'jade'
		],
		options: {
			spawn: false
		}
	},
	jade: {
		files: [
			'<%= paths.theme.jade %>/*.jade'
		],
		tasks: [
			'newer:jade'
		],
		options: {
			spawn: false
		}
	},
	helpers: {
		files: [
			'<%= paths.theme.helpers %>/**/*.*',
			'<%= paths.theme.helpers %>/.htaccess'
		],
		tasks: [
			'sync:helpers'
		],
		options: {
			spawn: false
		}
	}
}
