(function () {
    "use strict";

    angular
        .module("productManagement")
        .directive("collapsible", function () {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                template: "<div><h3 class='well-title hoverCursor' ng-click='toggleVisibiity()'>{{title}}</h4><div ng-show='visible' ng-transclude></div></div>",
                scope: {
                    title: "@"
                },
                controller: function($scope) {
                    $scope.visible = true;
                    $scope.toggleVisibiity = toggleVisibiity;

                    function toggleVisibiity()
                    {
                        $scope.visible = !$scope.visible;
                    }
                }
            }
        });
}());