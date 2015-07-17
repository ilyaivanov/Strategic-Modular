describe("1", function(){

    var s;
    beforeEach(module("app.common.models"));

    beforeEach(inject(function (surveys) {
        s = surveys;
    }));

    it("2", function(){
        expect(s.text).toBe("hello world");
    });
});