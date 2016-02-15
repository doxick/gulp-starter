var gulp = require('gulp'),
    browserify = require('./tasks/browserify'),
    html = require('./tasks/html'),
    less = require('./tasks/less'),
    images = require('./tasks/images'),
    browserSync = require('./tasks/browsersync'),
    copy = require('./tasks/copy'),
    iconfont = require('./tasks/iconfont'),
    config = require('./config');

gulp.task('default',['build']);
gulp.task('build',[
    browserify.build,
    less.build,
    html.build,
    images.build,
    copy.build,
    iconfont.build
]);
gulp.task('watch',[
    browserify.watch,
    less.watch,
    html.watch,
    images.watch,
    copy.watch,
    iconfont.watch,
    'browsersyncinit'
]);

gulp.task('browsersyncinit',function(){
    browserSync.init({
        server: {
            baseDir: config.browsersync.path
        }
    });
});