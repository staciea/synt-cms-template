// Delete files/folders using globs
var gulp = require('gulp'),
	paths = require('../paths'),
	del = require('del'),
	vinylPaths = require('vinyl-paths');


gulp.task('clean:gitkeep', function() {
	return gulp.src([paths.theme.main + '/**/.gitkeep'], { read: false })
		.pipe(vinylPaths(del));
});

gulp.task('clean:cache', function() {
	return gulp.src([
		paths.theme.js + '/**/*.min.*.js',
		paths.theme.css + '/**/*.min.*.css',
		paths.theme.fonts + '/**/*.*.{eot,svg,ttf,otf,woff,woff2}',
		paths.theme.main + '/**/*.*.{png,jpg,gif,svg,ico}'
	], { read: false })
		.pipe(vinylPaths(del));
});
