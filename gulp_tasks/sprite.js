// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	spritesmith = require('gulp.spritesmith');


// Minify image files
gulp.task('sprite', function () {
	return gulp.src([
		paths.theme.images + '/sprite/*.png',
		'!' + paths.theme.images + '/sprite/sprite.png'
	])
		.pipe(plumber())
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css',
			algorithm: 'left-right',
			algorithmOpts: {sort: false},
			padding: 1
		}))
		.pipe(gulp.dest(paths.theme.images + '/sprite'));
});
