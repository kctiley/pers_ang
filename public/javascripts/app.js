
var app = angular.module('klintTheHuman', ['ui.router', 'ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])
  .config( function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('/fc', {
        url: "/fc",
        templateUrl: "partials/fc.html",
        controller: "homeController"
      })
      .state('/', {
        url: "/",
        templateUrl: "partials/home.html",
        controller: "homeController"
      })



})


