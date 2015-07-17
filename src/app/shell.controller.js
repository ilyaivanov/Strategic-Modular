function ShellController() {
    var shell = this;

    shell.text = "hello world";
}

angular
    .module("app")
    .controller("ShellController", ShellController);
