(function () {
    "use strict";

    angular
        .module("productManagement")
        .directive('attributeTwo', function($compile) {
        return {
            restrict: 'E',
            link: function(scope, element, attrs, controller) {
                var markup = "<input type='text' ng-model='sampleData2' /> {{ sampleData2 }}<br/>";

                angular.element(element).html($compile(markup)(scope));
            },
            scope: {}  //use to make the scope of each element using this directive unique
        };
    });
}());