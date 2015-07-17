module.exports = function () {
    var config = {};
    config.getKarmaOptions = getKarmaOptions;

    return config;

    function getKarmaOptions() {
        return {
            files:  [
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
            exclude: []
        };
    }
};
