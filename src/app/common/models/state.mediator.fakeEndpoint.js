angular.module("app.common.models.state.mediator.fakeEndpoint", ['ngMockE2E'])
    .run(function ($httpBackend) {
         $httpBackend
            .whenGET("/api/GetInitialState")
            .respond({
                surveys: [
                    {id: 1, name: "My Survey 1"},
                    {id: 2, name: "My Survey 2"},
                    {id: 3, name: "My Survey 3"}
                ]
            });

        $httpBackend.whenGET(/.*.html/).passThrough();//TODO move this into a general point
    }
);
