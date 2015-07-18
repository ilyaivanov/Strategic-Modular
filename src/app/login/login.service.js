function login($http, $timeout) {
    this.isUserLoggedIn = function () {
        return $http
            .get('/api/Account')
            .then(function (res) {
                return res.data;
            });
    }

    this.login = function (loginModel) {
        return $http
            .post('/api/Account', loginModel)
            .then(function (res) {
                return res.data;
            });
    }
}


angular
    .module("app.login")
    .service("login", login);