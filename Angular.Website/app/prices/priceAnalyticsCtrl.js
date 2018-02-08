(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("priceAnalyticsCtrl", ["$filter", "productService", "productResource", priceAnalyticsCtrl]);
    
    function priceAnalyticsCtrl($filter, productService, productResource) {
        var vm = this;

        vm.title = "Price Analytics";
        vm.dataResetBool = false;
        vm.products = [{}];

        vm.GenerateGraphs = GenerateGraphs;

        productResource.query(function (data) {
            vm.products = data;

            if (vm.products.length > 0) {
                vm.GenerateGraphs();
            }
        });

        function GenerateGraphs(){

            // Computed property
            for (var i = 0; i < vm.products.length; i++) {
                vm.products[i].marginPercent = productService.calculateMarginPercent(vm.products[i].price, vm.products[i].cost);
                vm.products[i].marginAmount = productService.calculateMarginAmount(vm.products[i].price, vm.products[i].cost);
            }

            //Amount Chart
            var chartDataAmount = [];

            //Filter - Top 5
            var orderedProductsAmount = $filter("orderBy")(vm.products, "marginAmount");
            var filteredProductsAmount = $filter("limitTo")(orderedProductsAmount, 5);

            for (var i = 0; i < filteredProductsAmount.length; i++) {
                chartDataAmount.push({
                    x: filteredProductsAmount[i].productName,
                    y: [filteredProductsAmount[i].cost, filteredProductsAmount[i].price, filteredProductsAmount[i].marginAmount]
                });
            }

            vm.dataAmount = {
                series: ["Cost", "Price", "Margin Amount"],
                data: chartDataAmount
            };

            vm.configAmount = {
                title: "Top $ Margin Products",
                tooltips: true,
                labels: false,
                mouseover: function () { },
                mouseout: function () { },
                click: function () { },
                legend: { display: true, position: "right" }
            };

            //Percent Chart
            var chartDataPercent = [];

            //Filter - Top 5
            var orderedProductsPercent = $filter("orderBy")(vm.products, "marginPercent");
            var filteredProductsPercent = $filter("limitTo")(orderedProductsPercent, 5);

            for (var i = 0; i < filteredProductsPercent.length; i++) {
                chartDataPercent.push({
                    x: filteredProductsPercent[i].productName,
                    y: [filteredProductsPercent[i].marginPercent]
                });
            }

            vm.dataPercent = {
                series: ["Margin %"],
                data: chartDataPercent
            };

            vm.configPercent = {
                title: "Top % Margin Products",
                tooltips: true,
                labels: false,
                mouseover: function() {},
                mouseout: function() {},
                click: function() {},
                legend: { display: true, position: "right" }
            }
        }
    };
})();