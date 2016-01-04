var gulp = require('gulp'),
    browserify = require('./tasks/browserify'),
    html = require('./tasks/html'),
    less = require('./tasks/less'),
	images = require('./tasks/images'),
    browserSync = require('./tasks/browsersync'),
    config = require('./config');

gulp.task('default',['build']);
gulp.task('build',[
	browserify.build,
	less.build,
	html.build,
	images.build
]);
gulp.task('watch',[
	browserify.watch,
	less.watch,
	html.watch,
	images.watch,
    'browsersyncinit'
]);

gulp.task('browsersyncinit',function(){
    browserSync.init({
        server: {
            baseDir: config.browsersync.path
        }
    });
});