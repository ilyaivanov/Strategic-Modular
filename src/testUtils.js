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
