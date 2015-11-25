var gulp = require('gulp'),
    config = require('../config'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    watchify = require('watchify');

var build = function(buildOnly){
	var bundler = browserify({
		entries: config.browserify.source,
	});

	if (! buildOnly)
		bundler = watchify(bundler);

	bundler.transform(babelify, {
		presets: config.babelify.presets,
		ignore: /(bower_components)|(node_modules)/
	});
	var bundle = function() {
		return bundler.bundle()
			.pipe(source(config.browserify.filename))
			.pipe(buffer())
			.pipe(gulp.dest(config.browserify.dest))
			.pipe(rename(config.browserify.filename.replace(/\.js$/, '.min.js')))
			.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(uglify())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(config.browserify.dest));
	}
	if (! buildOnly)
		bundler.on('update',bundle);
	return bundle();
}


gulp.task('browserify', function() {
	return build(true);
});

gulp.task('browserify-watch',['browserify'],function(){
	return build();
});

module.exports = {
	build: 'browserify',
	watch: 'browserify-watch'
};