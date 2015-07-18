function stateMediator($http, surveys) {
    this.loadInitialState = function () {
        return $http.get("/api/GetInitialState")
            .then(function (response) {
                var data = response.data;
                surveys.items = data.surveys;
            })
    };
}

angular
    .module("app.common.models")
    .service("stateMediator", stateMediator);
