function ShellController($state, $log, login, $timeout, loadingScreen, stateMediator, surveys) {
    var shell = this;

    shell.surveys = surveys;

    shell.onSurveyChange = function () {
        loadingScreen.show("Loading survey: " + shell.selectedSurvey.name);
        //TODO: load survey specific
        $timeout(loadingScreen.hide, 1000);
    };


    stateMediator
        .setOnInitialStateLoaded(onInitialStateLoaded);

    //initialization
    loadingScreen.show("Strategic Window is loading");

    login
        .isUserLoggedIn()
        .then(function (result) {
            if (result.isUserLoggedIn)
                handleUserIsLoggedIn(result);
            else
                handleUserIsNotLoggedIn();
        });

    function handleUserIsLoggedIn(result) {
        $log.info("user is already logged in (" + result.userName + "). Loading initial state.");
        stateMediator.loadInitialState();
    }

    function onInitialStateLoaded() {
        shell.selectedSurvey = surveys.items[0];
        shell.onSurveyChange();
        $log.info("Initial state have been loaded. Setting Survey: " + shell.selectedSurvey.name + ". Redirecting to Crosstabs");
        $state.go("crosstabs");
    }

    function handleUserIsNotLoggedIn() {
        loadingScreen.hide();
        $state.go("login");
        $log.log("user is not logged in, redirecting to login");
    }
}

angular
    .module("app")
    .controller("ShellController", ShellController);
