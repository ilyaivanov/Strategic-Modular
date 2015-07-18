function ShellController($state, $log, login, loadingScreen) {
    var shell = this;

    loadingScreen.show();

    login.isUserLoggedIn()
        .then(function (result) {
            if (result.isUserLoggedIn) {
                loadingScreen.hide();
                $log.info("user is already logged in ("+result.userName+") redirecting to crosstabs");

                $state.go("crosstabs");
            }
            else {
                loadingScreen.hide();
                $state.go("login");
                $log.log("user is not logged in, redirecting to login");

            }
        });
}

angular
    .module("app")
    .controller("ShellController", ShellController);
