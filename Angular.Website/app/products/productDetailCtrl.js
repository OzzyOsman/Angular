
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("productDetailCtrl", ["productService", "productResource", "$stateParams", productDetailCtrl]);

    function productDetailCtrl(productService, productResource, $stateParams) {
        var vm = this;
        vm.product = {};
        
        productResource
            .get({ productId: $stateParams.productId })
            .$promise
            .then(function (data) {
                vm.product = data;
                initialise();
            });

        function initialise() {
            vm.title = "Product Detail: " + vm.product.productName;

            vm.product.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);

            if (vm.product.tags) {
                vm.product.tagsList = vm.product.tags.toString();
            }
        }
    }
}());
