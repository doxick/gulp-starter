var gulp = require('gulp');
var config = require('../config');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var bundle = function(watch){
	var bundler = browserify({
		entries: config.browserify.source,
	});

	if (watch)
		bundler = watchify(bundler);

	bundler.transform(babelify, {
		presets: config.babelify.presets,
		ignore: /(bower_components)|(node_modules)/
	});
	var build = function() {
		return bundler.bundle()
			.pipe(source(config.browserify.filename))
			.pipe(buffer())
			.pipe(gulp.dest(config.browserify.dest))
			.pipe(size({title: 'JS'}))
			.pipe(rename(config.browserify.filename.replace(/\.js$/, '.min.js')))
			.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(uglify())
			.pipe(size({title: 'JS Minified'}))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(config.browserify.dest));
	}
	if (watch)
		bundler.on('update',build);
	return build();
}


gulp.task('browserify', function() {
	return bundle();
});

gulp.task('browserify-watch',function(){
	return bundle(true);
});

module.exports = {
	build: 'browserify',
	watch: 'browserify-watch'
};