var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    config = require('../config');
var runTimestamp = Math.round(Date.now()/1000);

var build = function()
{
    return gulp.src([config.iconfont.source])
        .pipe(iconfontCss({
            fontName: config.iconfont.name,
            path: config.iconfont.template,
            targetPath: config.iconfont.destCss,
            fontPath: config.iconfont.destInternal,
            cssClass: config.iconfont.cssClass
        }))
        .pipe(iconfont({
            fontName: config.iconfont.name,
            appendUnicode: true,
            formats: ['ttf', 'eot', 'woff', 'woff2','svg'],
            timestamp: runTimestamp,
            normalize: config.iconfont.normalize
        }))
        .pipe(gulp.dest(config.iconfont.dest));
};

gulp.task('font', function(){
    return build();
});

gulp.task('font-watch',['font'],function(){
    gulp.watch(config.iconfont.source,['font']);
});

module.exports = {
    build: 'iconfont',
    watch: 'iconfont-watch'
};