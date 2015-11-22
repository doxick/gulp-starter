var gulp = require('gulp');
var config = require('../config');
var size = require('gulp-size');
var rename = require('gulp-rename');

gulp.task('html',function(){
	return gulp.src(config.html.source)
		.pipe(rename(config.html.filename))
		.pipe(gulp.dest(config.html.dest));
});

gulp.task('html-watch',function(){
	return gulp.watch(config.html.source,['html'])
});

module.exports = {
	build: 'html',
	watch: 'html-watch'
};