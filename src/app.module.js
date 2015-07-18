//feature flags


//TODO: ugly, but no other way to sync tests are fake state loading
var isUnderUnitTests = !!window.jasmine;
if (!isUnderUnitTests) {



    //LOGIN
    const LOAD_FAKE_LOGIN = true;
    const IS_USER_ALREADY_LOGGED_IN = false; //assumes previous is true
    const FAKE_USER_NAME = "fake";
    const FAKE_PASSWORD = "112";




}



var app = angular.module('app', [
    'ui.router',
    'app.common',
    'app.login'
]);

var base = 'src/app/';
app.constant("templates", {
    login: base + 'login/login.html',
    crosstabs: base + 'crosstabs/crosstabs.html'
});

app.config(function ($stateProvider, templates) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: templates.login,
            controller:"LoginController",
            controllerAs:"login"
        }).state('crosstabs', {
            url: '/crosstabs',
            templateUrl: templates.crosstabs
        });
});