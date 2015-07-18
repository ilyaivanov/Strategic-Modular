module.exports = function () {
    var config = {};
    config.getKarmaOptions = getKarmaOptions;

    return config;

    function getKarmaOptions() {
        return {
            files:  [
                "bower_components/jquery/dist/jquery.js",
                "bower_components/angular/angular.js",
                "bower_components/angular-mocks/angular-mocks.js",
                "bower_components/ui-router/release/angular-ui-router.js",
                "src/*.js",
                "src/app/common.module.js",
                "src/app/common/models.module.js",
                "src/app/**/*.js",
                "src/app/**/*spec.js"
            ],
            exclude: []
        };
    }
};
