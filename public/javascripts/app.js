
var app = angular.module('klinttiley', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    // '$httpProvider',$httpProvider not needed unless using services
   $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .when('/fullcontact', {
      templateUrl: 'partials/fc_index.html',
      controller: 'homeController'
    })

  $locationProvider.html5Mode(true);
}])

