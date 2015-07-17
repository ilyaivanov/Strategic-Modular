function surveys() {
    var shell = this;

    shell.text = "hello world";
}

angular
    .module("app.common.models")
    .service("surveys", surveys);
