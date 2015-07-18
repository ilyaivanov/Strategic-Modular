describe('When shell is being created', function () {

    var end;
    var state;
    var loadingScreenMock;
    var mediatorMock;
    beforeEach(module('app'));

    beforeEach(inject(function ($q) {
        loadingScreenMock = {
            show: jasmine.createSpy(),
            hide: jasmine.createSpy()
        };

        mediatorMock = {
            loadInitialState: jasmine.createSpy().and.returnValue($q.defer().promise)
        };
    }));

    beforeEach(inject(function ($controller, $httpBackend, $state) {
        end = $httpBackend;
        state = $state;
        $controller('ShellController', {loadingScreen: loadingScreenMock, stateMediator: mediatorMock});
    }));

    it('loading screen should be shown', function () {
        expect(loadingScreenMock.show).toHaveBeenCalled();
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

        it("GetInitialState should be called", function () {
            expect(mediatorMock.loadInitialState).toHaveBeenCalled();
        });
    });
    function expectAccountServiceToRespondWith(userLoggedIn) {
        end.when('GET', '/api/Account')
            .respond({isUserLoggedIn: userLoggedIn});
    }


    function expectLoadingScreenToBeHidden() {
        expect(loadingScreenMock.hide).toHaveBeenCalled();
    }
});