var gulp = require('gulp');
var config = require('../config');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');
var minifyCss = require('gulp-minify-css');

gulp.task('less',function(){
	return gulp.src(config.less.source)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: config.less.browsers
		}))
		.pipe(rename(config.less.filename))
		.pipe(size({title:'CSS'}))
		.pipe(gulp.dest(config.less.dest))
		.pipe(minifyCss())
		.pipe(rename(config.less.filename.replace(/\.css$/,'.min.css')))
		.pipe(size({title:'CSS Minified'}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.less.dest));
});

gulp.task('less-watch',function(){
	return watchLess(config.less.source)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: config.less.browsers
		}))
		.pipe(rename(config.less.filename))
		.pipe(gulp.dest(config.less.dest))
		.pipe(minifyCss())
		.pipe(rename(config.less.filename.replace(/\.css$/,'.min.css')))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.less.dest));
});

module.exports = {
	build: 'less',
	watch: 'less-watch'
};