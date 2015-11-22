var gulp = require('gulp'),
    browserify = require('./tasks/browserify'),
    html = require('./tasks/html'),
    less = require('./tasks/less');

gulp.task('default',['build']);
gulp.task('build',[ browserify.build , less.build , html.build ]);
gulp.task('watch',[ browserify.watch , less.watch , html.watch ]);