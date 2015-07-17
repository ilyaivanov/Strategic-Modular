module.exports = function () {
    var config = {};
    config.getKarmaOptions = getKarmaOptions;

    return config;

    function getKarmaOptions() {
        return {
            files: [
                "bower_components/angular/angular.js",
                "bower_components/angular-mocks/angular-mocks.js",
                "src/app.module.js",
                "src/app/common.module.js",
                "src/app/common/models.module.js",
                "src/app/**/*.js"
            ],
            exclude: []
        };
    }
};
