// Extend jade templates with json data
module.exports = {
	all: {
		options: {
			global: true,
			data: {
				config: function(done) {
					var fs = require("fs"),
						paths = require(__dirname + '/config/paths.js');

					fs.readFile(paths.theme.data + '/config.json', function(err, data) {
						if(!err) {
							console.log('Config loaded!');
							data = JSON.parse(data)
							done(data);
						} else {
							console.log('Config not found...');
						}
					});
				}
			}
		}
	}
}
