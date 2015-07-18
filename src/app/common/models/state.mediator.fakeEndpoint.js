angular.module("app.common.models.state.mediator.fakeEndpoint", ['ngMockE2E'])
    .run(function ($httpBackend) {
        var surveys = [
            {id: 1, name: "My Survey 1"},
            {id: 2, name: "My Survey 2"},
            {id: 3, name: "My Survey 3"}
        ];
        $httpBackend
            .whenGET("/api/GetInitialState")
            .respond({
                surveys: surveys
            });


        for (var i = 0; i < surveys.length; i++) {
            var surveyName = surveys[i].name;
            $httpBackend
                .whenGET("/api/GetStateForSurvey?surveyName=" + surveyName)
                .respond(createStateForSurveyResponse(surveyName));
        }


        //TODO move this into a general point
        $httpBackend.whenGET(/.*.html/).passThrough();


        function createStateForSurveyResponse(surveyName) {
            return {
                categories: [
                    {
                        name: "Demographics",
                        questions: [
                            {name: "Gender"},
                            {name: "Age"},
                            {name: "Income"}
                        ]
                    },
                    {
                        name: "Media",
                        questions: [
                            {name: "Golf"},
                            {name: "Football"},
                            {name: "Basketball"}
                        ]
                    }
                ],
                crosstabs: [
                    {name: "Crosstab 1 (" + surveyName + ")", author: FAKE_USER_NAME},
                    {name: "Crosstab 2 (" + surveyName + ")", author: FAKE_USER_NAME},
                    {name: "Crosstab 3 (" + surveyName + ")", author: FAKE_USER_NAME},
                    {name: "Crosstab 4 (" + surveyName + ")", author: FAKE_USER_NAME}
                ]
            };
        }
    }
)
;
