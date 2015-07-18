function spyOnStubMethod(o, methodName) {
    if (o[methodName] === undefined)
        o[methodName] = function () {
        };
    return spyOn(o, methodName);
}

function ignoreLoginTemplate() {
    ignoreTemplate('login');
}

function ignoreCrosstabsTemplate() {
    ignoreTemplate('header');
    ignoreTemplate('crosstabs');
}

function ignoreTemplate(itemName) {
    inject(function ($templateCache, templates) {
        $templateCache.put(templates[itemName], '');
    });
}
