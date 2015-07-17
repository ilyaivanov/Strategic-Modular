function login($http, $timeout) {
    this.isUserLoggedIn = function () {
        return $http
            .get('/api/Account')
            .then(function (res) {
                return res.data;
            });
    }
}


angular
    .module("app.login")
    .service("login", login);