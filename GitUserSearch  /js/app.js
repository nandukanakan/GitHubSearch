var app = angular.module('app', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {   
    'use strict';
    $stateProvider       
           .state('home', {
            url : "/home",
            templateUrl : 'pages/home.html',
            controller : 'homeController'               
        })                    
         .state('repo', {
            url:"/repo",
            templateUrl:'pages/repo.html',
            controller:'repoController'               
        });
    $urlRouterProvider.otherwise("/index.html");
}]);

