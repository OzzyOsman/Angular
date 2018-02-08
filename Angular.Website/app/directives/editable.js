(function() {
    "use strict";

    angular
        .module("productManagement")
        .directive("editableScoped", function() {
            return {
                restrict: "E",
                template:
                    "<div tabindex='1' ng-show='labelEnabled' ng-focus='setEditable(id)'>" +
                        "{{label}}: <span class='cell' tabindex='0' ng-click='toggleEditor()' ng-focus='toggleEditor()'>{{ value }}</span>" +
                    "</div>" +
                    "<div ng-show='editorEnabled'>" +
                        "<div class='col-sm-2'>{{label}}:</div> <div class='col-sm-10'><input type='text' class='form-control input-sm' ng-model='value' ng-blur='toggleEditor()' focus enable='editorEnabled' /></div>" +
                    "</div>",
                scope: {
                    value: "@",
                    label: "@",
                    id: "@"
                },
                controller: editCtrl
            }
        });

    ///////

    angular
      .module('productManagement')
      .controller('editCtrl', [editCtrl]);

    function editCtrl($scope) {
        $scope.editorEnabled = false;
        $scope.labelEnabled = true;

        $scope.saveData = saveData;
        $scope.setEditable = setEditable;
        $scope.toggleEditor = toggleEditor;
        
        function toggleEditor() {
            $scope.editorEnabled = !$scope.editorEnabled;   //toggle editor view
            $scope.labelEnabled = !$scope.labelEnabled;     //toggle label view
        }
    
        function setEditable(value) {
            $scope.editFieldId = value;
        }

        function saveData(value) {
            $scope.editFieldId = null;
            toastr.info(value, "Saved value");
        }
    }

    //////

    angular
        .module("productManagement")
        .directive('focus', function() {
            return {
                scope: {
                    enable: "="
                },
                link: function(scope, elem) {

                    var unwatch = scope.$watch('enable', function(v) {
                        if (v) {
                            elem.focus();
                        }
                    });

                    scope.$on('$destroy', function() {
                        unwatch();
                    });
                }
            }
        });

    ///////

    //http://stackoverflow.com/questions/25408399/setting-focus-on-toggled-element
}());