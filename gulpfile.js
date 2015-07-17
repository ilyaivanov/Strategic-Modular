var gulp = require('gulp');
var karma = require('gulp-karma');
var config = require('./gulp.config')();



gulp.task('test', function() {
    return gulp.src(config.getKarmaOptions().files)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});


gulp.task('default', ['test'], function () {
    console.log('\n\nBuild OK');
});


