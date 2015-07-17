function loadingScreen() {

    this.show = function (message, options) {
        waitingDialog.show(message, options);
    };

    this.hide = function () {
        waitingDialog.hide();
    };
}

angular
    .module("app")
    .service('loadingScreen', loadingScreen);