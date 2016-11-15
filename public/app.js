// Module
const myApp = angular.module('myApp', ['ngRoute']);

// config
myApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController',
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

    .when('/third/', {
      templateUrl: 'pages/third.html',
      controller: 'thirdController'
    })

    .when('/third/:num', {
      templateUrl: 'pages/third.html',
      controller: 'thirdController'
    })

});

myApp.service('nameService', function() {

  const self = this;
  this.name = 'nameService.name!!!';
  this.name2 = '123141234123412431414312412412';
  this.car = 'jeep wrangler';


  this.nameLength = function() {
    return self.name.length;
  }
});

myApp.directive('directiveOne', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/test-directive.html',
    replace: true,
    scope: {
      name: '@',
      nameService: '=',
      testFunction: '&'
    }
  }
})

// Controller
myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {

  $scope.name = 'Matt';
  $log.log(nameService.name, nameService.nameLength(), nameService.nameLength);
  $scope.nameService = nameService;


}]);

myApp.controller('secondController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {

  $scope.name = 'Ryan';
  $scope.nameService = nameService;
  $scope.testFunction = function(name, string) {
    return 'Result of function:' + name + string;
  }

}]);

myApp.controller('thirdController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

  $scope.name = 'Third page name slot';
  $scope.something = 'something';
  $scope.num = $routeParams.num || "default";
  $log.info(nameService)

  $scope.nameService = nameService;
}]);
