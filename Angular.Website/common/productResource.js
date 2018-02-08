(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource", ["$resource", "appSettings", productResource]);

    function productResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/product/");
        //return $resource(appSettings.serverPath + "/product/:search");
    }
}());

