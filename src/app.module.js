//feature flags


//TODO: ugly, but no other way to sync tests are fake state loading
var isUnderUnitTests = !!window.jasmine;
if (!isUnderUnitTests) {


    //COMMON
    const LOAD_FAKE_INITIAL = true;


    //LOGIN
    const LOAD_FAKE_LOGIN = true;
    const IS_USER_ALREADY_LOGGED_IN = true; //assumes previous is true
    const FAKE_USER_NAME = "fake";
    const FAKE_PASSWORD = "112";


}


var app = angular.module('app', [
    'ui.router',
    'app.common',
    'app.login',
    'app.crosstabs'
]);

var base = 'src/app/';
app.constant("templates", {
    header: base + 'header.html',

    login: base + 'login/login.html',
    crosstabs: base + 'crosstabs/crosstabs.html'
});

app.config(function ($stateProvider, templates) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: templates.login,
            controller: "LoginController",
            controllerAs: "login"
        }).state('header', {
            templateUrl: templates.header
        }).state('crosstabs', {
            url: '/crosstabs',
            parent: "header",
            templateUrl: templates.crosstabs,
            controller: "CrosstabsController",
            controllerAs: "crosstabs"
        });
});