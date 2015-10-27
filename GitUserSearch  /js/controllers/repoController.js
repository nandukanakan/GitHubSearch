"use strict";
app.controller("repoController", ["$scope", "$http", "getUser", function ($scope, $http, getUser) {
    $scope.name = getUser.userName;
    $scope.userRepoInfo = function () {
        $http.get("https://api.github.com/users/" + $scope.name).success(function (response) {
            $scope.usrstatus = "success";
            $scope.loadRepo(response);
        });
        $scope.loadStatus = false;

    };

    $scope.loadRepo = function (userdata) {
        $http.get(userdata.repos_url)
            .success(function (reposdata) {
                $scope.rpostatus = "success";
                $scope.repoData = reposdata;
            });
    };
    }]);