﻿(function () {
    "use strict";

    function RedirectsResource($http, umbRequestHelper) {

        var apiUrl = Umbraco.Sys.ServerVariables["Our.Umbraco.RedirectsViewer"].RedirectsApi;

        var resource = {
            getRedirects: getRedirectsForContent,
            deleteRedirect : deleteRedirect
        };

        return resource;

        function getRedirectsForContent(contentKey) {
            return umbRequestHelper.resourcePromise(
                $http.get(apiUrl + "GetRedirectsForContent?contentKey=" + contentKey),
                "Failed to load redirects for content"
            );
        };

        function deleteRedirect(id) {
            return umbRequestHelper.resourcePromise(
                $http.delete(apiUrl + "DeleteRedirect?id=" + id),
                "Failed delete redirect"
            );
        }

    }

    angular.module("umbraco.resources").factory("Our.Umbraco.RedirectsViewer.RedirectsResource", RedirectsResource);

})();