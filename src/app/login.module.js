var dependencies = [
    "app.common",
    "ui.router"
];

if(LOAD_FAKE_LOGIN)
    dependencies.push("app.login.fakeEndpoint");

angular.module("app.login", dependencies);