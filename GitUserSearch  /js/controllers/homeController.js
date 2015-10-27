"use strict";
app.controller("homeController", ["$scope", "getUser", function ($scope, getUser) {

        $scope.userName = function (name) {
            $scope.loadStatus = true;
            getUser.userSearchvalue(name).success(function (response) {
                $scope.userData = response.items;
            });
        };
        
                $scope.saveUser = function (uname) {
           getUser.userName = uname;
         
        };

    }]);