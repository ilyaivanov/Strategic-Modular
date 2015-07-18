angular.module("app.login.fakeEndpoint", ['ngMockE2E'])
    .run(function ($httpBackend) {
        $httpBackend
            .whenGET("/api/Account")
            .respond({
                isUserLoggedIn: IS_USER_ALREADY_LOGGED_IN,
                userName: IS_USER_ALREADY_LOGGED_IN ? FAKE_USER_NAME : undefined
            });

        $httpBackend
            .whenPOST("/api/Account", {
                userName: FAKE_USER_NAME,
                password: FAKE_PASSWORD
            })
            .respond({
                isSuccessful: true,
                userName: FAKE_USER_NAME
            });

        $httpBackend
            .whenPOST("/api/Account")
            .respond({
                isSuccessful: false
            });
        $httpBackend.whenGET(/.*.html/).passThrough();//TODO move this into a general point
    }
);
