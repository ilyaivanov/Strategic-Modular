//feature flags


//LOGIN

LOAD_FAKE_LOGIN = false;
const IS_USER_ALREADY_LOGGED_IN = false; //assumes previous is true
const FAKE_USER_NAME = "fake";
const FAKE_PASSWORD = "112";



var app = angular.module('app', [
    'ui.router',
    'app.common',
    'app.login'
]);


app.config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'src/app/login/login.html',
            controller:"LoginController",
            controllerAs:"login"
        }).state('crosstabs', {
            url: '/crosstabs',
            templateUrl: 'src/app/crosstabs/crosstabs.html'
        });
});