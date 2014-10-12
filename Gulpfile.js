'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  // do nothing for now
});

gulp.task('tests', function() {
    gulp.src(['test/*.js'], {
        read: false
    })
    .pipe(mocha({
        reporter: 'spec',
        globals: {
            should: require('chai').should()
        }
    }));
});
