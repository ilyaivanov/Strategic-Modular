var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();
var wiredep = require('wiredep').stream;
var args = require('yargs').argv;


gulp.task('default', ['inject'], function () {
    log('\n\nBuild OK');
});


gulp.task('inject', function () {
    log('Wire up the bower css, js and our app css, js into the html');

    return gulp
        .src(config.index)
        .pipe(wiredep(config.wiredepOptions))
        .pipe($.inject(gulp.src(config.alljs).pipe($.if(args.verbose, $.print())), config.injectOptions))
        .pipe($.inject(gulp.src(config.css), config.injectOptions))
        .pipe($.rename('index.html'))
        .pipe(gulp.dest(''));
});


gulp.task('test', function () {
    log('Running unit tests');
    return gulp.src(config.getKarmaOptions().files)
        .pipe($.karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            throw err;
        });
});


//now is ignored
gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});


function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
