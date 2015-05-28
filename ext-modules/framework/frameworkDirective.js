"use strict";

angular.module("framework").directive("framework", function() {
    return {
        transclude: true,
        scope: {},
        controller: "frameworkController",
        templateUrl: "ext-modules/framework/frameworkTemplate.html"
    };
});