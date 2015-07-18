function CrosstabsController(_crosstabs_) {
    var crosstabs = this;

    crosstabs.crosstabs = _crosstabs_;
}

angular
    .module("app.crosstabs")
    .controller("CrosstabsController", CrosstabsController);
