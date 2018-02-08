(function () {
    "use strict";

    var app = angular.module("productManagement", ["common.services", "ui.router", "ui.mask", "ui.bootstrap", "angularCharts"]);

    //states
    var home = {
        url: "/",
        //templateUrl: "app/welcomeView.html"
        templateUrl: "app/products/productListView.html",
        controller: "ProductListCtrl as vm"
    };

    var productList = {
        url: "/products",
        templateUrl: "app/products/productListView.html",
        controller: "ProductListCtrl as vm"
    };

    var popOver = {
        url: "/popover",
        templateUrl: "app/popover/popover.html",
        controller: "popoverCtrl as vm"
    }


    var directives = {
        url: "/directives",
        templateUrl: "app/directives/directives.html",
        controller: "eventsCtrl as vm"
    }


    var priceAnalytics = {
        url: "/analytics",
        templateUrl: "app/prices/priceAnalyticsView.html",
        controller: "priceAnalyticsCtrl as vm"
    }

    var productDetail = {
        url: "/products/:productId",
        templateUrl: "app/products/productDetailView.html",
        controller: "productDetailCtrl as vm"
    };

    var productEdit = {
        //abstract: true,
        url: "/products/edit/:productId",
        templateUrl: "app/products/edit/productEditView.html",
        controller: "productEditCtrl as vm"
    };

    var productEdit_Info = {
        url: "/info",
        templateUrl: "app/products/edit/productEditInfoView.html"
    };

    var productEdit_Price = {
        url: "/price",
        templateUrl: "app/products/edit/productEditPriceView.html"
    };

    var productEdit_Tags = {
        url: "/tags",
        templateUrl: "app/products/edit/productEditTagsView.html",
        controller: "productTagCtrl as vm"
    };

    //routes
    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        //products
        $stateProvider
            .state("home", home)
            .state("popOver", popOver)
            .state("directives", directives)
            .state("productList", productList)
            .state("productEdit", productEdit)
            .state("productEdit.Info", productEdit_Info)
            .state("productEdit.Price", productEdit_Price)
            .state("productEdit.Tags", productEdit_Tags)
            .state("priceAnalytics", priceAnalytics)
            .state("productDetail", productDetail);

        //default
        $urlRouterProvider.otherwise("/");
    }]);
}());