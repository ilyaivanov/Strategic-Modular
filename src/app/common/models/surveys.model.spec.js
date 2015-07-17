describe("1", function(){

    var surveys;
    beforeEach(module("app.common.models"));

    beforeEach(inject(function (_surveys_) {
        surveys = _surveys_;
    }));

    it("2", function(){
        expect(surveys.text).toBe("hello world");
    });
});