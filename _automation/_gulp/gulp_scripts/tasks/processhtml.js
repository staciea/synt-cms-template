// Process html files at build time to modify them depending on the release environment
var gulp = require('gulp'),
	paths = require('../paths'),
	processhtml = require('gulp-processhtml');


//Delete some dev code and references from files
gulp.task('processhtml', function() {
  return gulp.src(paths.theme.html + '/*.html')
	.pipe(processhtml())
	.pipe(gulp.dest(paths.theme.html));
});
