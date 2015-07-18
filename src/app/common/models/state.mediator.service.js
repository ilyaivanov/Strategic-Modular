function stateMediator($http, $log, surveys, questionCategories, crosstabs) {
    var self = this;

    this.setOnInitialStateLoaded = function (callback) {
        self.callback = callback;
    };

    this.loadInitialState = function () {
        return $http.get("/api/GetInitialState")
            .then(function (response) {
                var data = response.data;
                surveys.items = data.surveys;
                if (self.callback)
                    self.callback();
            })
    };

    this.loadStateForSurvey = function (survey) {
        return $http.get("/api/GetStateForSurvey?surveyName=" + survey.name)
            .then(function (response) {
                $log.info("Loaded state for survey " + survey.name + ". ");
                var data = response.data;
                questionCategories.items = data.categories;
                crosstabs.items = data.crosstabs;
            });
    }
}

angular
    .module("app.common.models")
    .service("stateMediator", stateMediator);
