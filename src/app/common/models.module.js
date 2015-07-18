var dependencies = [
];

if(LOAD_FAKE_INITIAL)
    dependencies.push("app.common.models.state.mediator.fakeEndpoint");


angular.module("app.common.models", dependencies);