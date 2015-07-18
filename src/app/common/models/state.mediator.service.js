function stateMediator($http, surveys) {
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
}

angular
    .module("app.common.models")
    .service("stateMediator", stateMediator);
