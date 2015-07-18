describe('When shell is being created', function () {

    var end;
    var state;
    var loadingScreen;

    beforeEach(module('app'));

    beforeEach(function () {
        loadingScreen = {};
        spyOnStubMethod(loadingScreen, 'show');
        spyOnStubMethod(loadingScreen, 'hide');
    });

    beforeEach(inject(function ($controller, $httpBackend, $state) {
        end = $httpBackend;
        state = $state;
        $controller('ShellController', {loadingScreen: loadingScreen});
    }));

    it('loading screen should be shown', function () {
        expect(loadingScreen.show).toHaveBeenCalled();
    });

    describe('if user is not logged in', function () {
        beforeEach(function () {
            expectAccountServiceToRespondWith(false);
            ignoreLoginTemplate();
            end.flush();
        });

        it('loading screen should be hidden',
            expectLoadingScreenToBeHidden);

        it('user should be redirected to login page', function () {
            expect(state.current.name).toBe('login');
        });
    });
    describe('if user is already logged in', function () {
        beforeEach(function () {
            expectAccountServiceToRespondWith(true);
            ignoreCrosstabsTemplate();
            end.flush();
        });

        it('loading screen should be hidden',
            expectLoadingScreenToBeHidden);

        it('he should be redirected to crosstabs page', function () {
            expect(state.current.name).toBe('crosstabs');
        });
    });
    function expectAccountServiceToRespondWith(userLoggedIn) {
        end.when('GET', '/api/Account')
            .respond({isUserLoggedIn: userLoggedIn});
    }

    function expectLoadingScreenToBeHidden() {
        expect(loadingScreen.hide).toHaveBeenCalled();
    }
});