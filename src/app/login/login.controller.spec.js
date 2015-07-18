describe('On a login page', function () {

    var end;
    var login;
    var loadingScreen;
    var state;
    beforeEach(function() {
        loadingScreen = {
            show: jasmine.createSpy(),
            hide: jasmine.createSpy()
        };
    });

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $httpBackend, $state) {
        end = $httpBackend;
        state = $state;
        login = $controller('LoginController', {loadingScreen: loadingScreen});
    }));



    describe('if user enters valid userName, password and clicks login', function () {
        var loginModel;
        beforeEach(function () {
            loginModel = {userName: 'fakeUser', password: '112'};
            login.userName = loginModel.userName;
            login.password = loginModel.password;
        });

        beforeEach(function () {
            login.login();
        });

        it('spinning button should be displayed', function () {
            expect(login.isLoggingIn).toBe(true);
        });
        describe("when request is being finished with successsfull login", function () {
            beforeEach(function () {
                end.when('POST', '/api/Account', loginModel)
                    .respond({isSuccessful: true});
                ignoreCrosstabsTemplate();
                end.flush();
            });
            it("spinning button should be hidden", function () {
                expect(login.isLoggingIn).toBe(false);

            });
            xit("loading screen should be shown", function () {
                expect(loadingScreen.show).toHaveBeenCalled();
            });
            it("no error message should be shown", function(){
                expect(login.errorMessage).toBeFalsy();
            });
            it("should be redirected to crosstabs", function(){
                expect(state.current.name).toBe("crosstabs");

            });
        });
    });

    describe('if user enters invalid userName or password and clicks login', function () {
        beforeEach(function () {
            login.login();
        });

        it('spinning button should be displayed', function () {
            expect(login.isLoggingIn).toBe(true);
        });
        describe("when request is being finished with a failed login", function () {
            beforeEach(function () {
                end.when('POST', '/api/Account')
                    .respond({isSuccessfull: false});
                end.flush();
            });
            it("spinning button should be hidden", function () {
                expect(login.isLoggingIn).toBe(false);

            });
            it("loading screen should not be shown", function () {
                expect(loadingScreen.show).not.toHaveBeenCalled();
            });

            it("an error message should be shown", function(){
                expect(login.errorMessage).toBe("Invalid username of password");
            });
        });
    });
});