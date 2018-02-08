(function () {
    "use strict";

    angular
        .module("productManagement")
        .directive('voting', function () {
            return {
                restrict: 'E',
                templateUrl: "app/directives/templates/votingTemplate.html",
                scope: {
                    voteup: "&",
                    votedown: "&",
                    votescount:  "@"                // using "@" requires the param value to be evaluated so wrap with "{{}}".
                                                    // Alternatively use "="  - see directives.html example 4
                }
            };
        });
}());