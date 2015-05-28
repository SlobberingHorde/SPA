"use strict";

angular.module("framework").directive("framework", function() {
    return {
        transclude: false,
        scope: {

        },
        controller: "frameworkController",
        templateUrl: "ext-modules/framework/frameworkTemplate.html"
    };
});