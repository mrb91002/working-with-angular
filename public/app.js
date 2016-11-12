// Module
const myApp = angular.module('myApp', ['ngRoute']);

// config
myApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controler: 'secondController'
    })
});

// Controller
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

  // $scope.name = 'Matt';

}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

  // $scope.name = 'Ryan';

}]);
