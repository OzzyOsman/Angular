(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("popoverCtrl", popoverCtrl);

    function popoverCtrl() {
        var vm = this;

        vm.dynamicPopover = {
            content: [{ productName: "Leaf Rake" }, { productName: "Garden Cart" }],
            templateUrl: 'myPopoverTemplate.html',
            title: 'Title'
        };
    }
}());
