var app = angular.module('app', [
    'ui.router',
    'app.common',
    'app.login'
]);


app.config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html'
        }).state('crosstabs', {
            url: '/crosstabs',
            templateUrl: 'app/crosstabs/crosstabs.html'
        });
});