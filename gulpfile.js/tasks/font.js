var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    config = require('../config');
var runTimestamp = Math.round(Date.now()/1000);

var build = function()
{
    return gulp.src([config.font.source]).pipe(iconfontCss({
            fontName: config.font.name,
            path: config.font.template,
            targetPath: config.font.destCss,
            fontPath: config.font.destInternal,
            cssClass: config.font.cssClass
        }))
        .pipe(iconfont({
            fontName: config.font.name,
            appendUnicode: true,
            formats: ['ttf', 'eot', 'woff', 'woff2','svg'],
            timestamp: runTimestamp,
            normalize: true
        }))
        .pipe(gulp.dest(config.font.dest));
};

gulp.task('font', function(){
    return build();
});

gulp.task('font-watch',function(){
    gulp.watch(config.font.source,['font']);
});

module.exports = {
    build: 'font',
    watch: 'font-watch'
};