function ShellController(surveys) {
    var shell = this;

    shell.surveys = surveys;
}

angular
    .module("app")
    .controller("ShellController", ShellController);
