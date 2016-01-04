var config = require('../config'),
    gulp = require('gulp'),

    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    watchLess = require('gulp-watch-less');

var build = function(buildOnly)
{
	return ( buildOnly  ? gulp.src(config.less.source)
						: watchLess(config.less.source) )
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: config.autoprefixer.browsers
		}))
		.pipe(rename(config.less.filename))
		.pipe(gulp.dest(config.less.dest))
		.pipe(minifyCss())
		.pipe(rename(config.less.filename.replace(/\.css$/,'.min.css')))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.less.dest));
}

gulp.task('less',function(){
	return build(true);
});

gulp.task('less-watch',['less'],function(){
	return build();
});

module.exports = {
	build: 'less',
	watch: 'less-watch'
};