// Karma configuration
// Generated on Wed Jul 08 2015 21:53:13 GMT+0300 (FLE Daylight Time)
var gulpConfig = require('./gulp.config')();


module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            "node_modules/angular/angular.js",
            "node_modules/jquery/dist/jquery.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "node_modules/ui-router/angular-ui-router.js",
            "src/*.js",
            "src/app/common.module.js",
            "src/app/common/models.module.js",
            "src/app/**/*.js",
            "src/app/**/*spec.js"
        ],


        // list of files to exclude
        exclude: gulpConfig.getKarmaOptions().exclude,


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
