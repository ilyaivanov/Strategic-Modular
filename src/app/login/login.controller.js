function LoginController(login, stateMediator) {
    var loginController = this;

    loginController.login = function () {
        loginController.isLoggingIn = true;

        login.login(createLoginModel())
            .then(function (response) {
                loginController.isLoggingIn = false;
                if (response.isSuccessful)
                    stateMediator.loadInitialState();
                else
                    loginController.errorMessage = "Invalid username of password";
            })
    };

    function createLoginModel() {
        return {
            userName: loginController.userName,
            password: loginController.password
        };
    }
}

angular
    .module("app.login")
    .controller("LoginController", LoginController);
