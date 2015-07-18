describe("Having a mediator", function () {

    beforeEach(module("app.common.models"));

    var mediator;
    var end;
    var dummySurveys;
    var s;
    var callback = jasmine.createSpy("load initial state callback");

    beforeEach(inject(function (stateMediator, $httpBackend, surveys) {
        mediator = stateMediator;
        end = $httpBackend;
        s = surveys;
    }));

    describe("when loading initial user state", function () {
        beforeEach(function () {
            dummySurveys = [{name: "survey 1"}];
            end.whenGET("/api/GetInitialState")
                .respond({surveys: dummySurveys});
        });

        describe("a call to /api/GetInitialState is fired", function () {
            beforeEach(function () {
                mediator.loadInitialState().then(callback);
                end.flush();
            });

            describe("when it resolved", function () {
                it("surveys should be assigned to surveys service", function () {
                    expect(s.items).toEqual(dummySurveys)
                });

                it("callback function should be called", function () {
                    expect(callback).toHaveBeenCalled();
                });
            });

        });
    });

    describe("when loading survey specific state", function () {
        beforeEach(function () {
            end.whenGET("/api/GetStateForSurvey?surveyName=S1")
                .respond({
                    crosstabs: [{}],
                    categories: [{}]
                });
        });

        var crosstabs;
        var categories;
        beforeEach(inject(function (_crosstabs_, questionCategories) {
            crosstabs = _crosstabs_;
            categories = questionCategories;
            mediator.loadStateForSurvey({name: "S1"});
            end.flush();
        }));

        it("crosstabs should be assigned", function () {
            expect(crosstabs.items.length).toBe(1);
        });

        it("questionCategories should be assigned", function () {
            expect(categories.items.length).toBe(1);
        });
    });
});


